import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let _supabase = null as any;

if (supabaseUrl && supabaseAnonKey) {
  _supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  // Não interrompe a aplicação em desenvolvimento quando as vars não existem.
  // Em produção você deve definir `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`.
  // Fornecemos fallbacks para que a UI continue funcionando sem Supabase.
  // Isso evita a tela em branco quando as variáveis não estão configuradas.
  // eslint-disable-next-line no-console
  console.warn(
    "Supabase environment variables not set — using local fallbacks."
  );
}

export const supabase = _supabase as ReturnType<typeof createClient> | null;

export interface QuizRanking {
  id?: string;
  player_name: string;
  score: number;
  total_questions: number;
  level: string;
  time_taken: number;
  created_at?: string;
}

export const saveRanking = async (ranking: QuizRanking) => {
  if (!supabase) {
    // Fallback persistente: salva no localStorage para testes locais
    // eslint-disable-next-line no-console
    console.warn(
      "saveRanking called but Supabase is not initialized. Saving to localStorage fallback."
    );

    try {
      const raw = localStorage.getItem("quiz_rankings_local");
      const list: QuizRanking[] = raw ? JSON.parse(raw) : [];

      const entry: QuizRanking = {
        ...ranking,
        id: "local-" + Date.now(),
        created_at: new Date().toISOString(),
      };

      list.push(entry);

      // Persiste e mantém ordenação por score desc / time asc
      list.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.time_taken - b.time_taken;
      });

      localStorage.setItem("quiz_rankings_local", JSON.stringify(list));

      return entry;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Error saving ranking to localStorage:", err);
      return {
        ...ranking,
        id: "local-error-" + Date.now(),
        created_at: new Date().toISOString(),
      } as QuizRanking;
    }
  }

  const { data, error } = await supabase
    .from("quiz_rankings")
    .insert([ranking])
    .select()
    .maybeSingle();

  if (error) throw error;
  return data;
};

export const getTopRankings = async (limit: number = 10) => {
  if (!supabase) {
    // Fallback persistente: usa localStorage para armazenar rankings localmente
    // Isso permite visualizar um leaderboard entre recarregamentos sem Supabase.
    // eslint-disable-next-line no-console
    console.warn(
      "getTopRankings called but Supabase is not initialized. Using localStorage fallback."
    );

    try {
      const raw = localStorage.getItem("quiz_rankings_local");
      const list: QuizRanking[] = raw ? JSON.parse(raw) : [];

      // Ordena: maior score primeiro, menor time_taken primeiro
      list.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.time_taken - b.time_taken;
      });

      return list.slice(0, limit);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Error reading local rankings:", err);
      return [] as QuizRanking[];
    }
  }

  const { data, error } = await supabase
    .from("quiz_rankings")
    .select("*")
    .order("score", { ascending: false })
    .order("time_taken", { ascending: true })
    .limit(limit);

  if (error) throw error;
  return data;
};
