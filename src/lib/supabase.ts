import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
  const { data, error } = await supabase
    .from('quiz_rankings')
    .insert([ranking])
    .select()
    .maybeSingle();

  if (error) throw error;
  return data;
};

export const getTopRankings = async (limit: number = 10) => {
  const { data, error } = await supabase
    .from('quiz_rankings')
    .select('*')
    .order('score', { ascending: false })
    .order('time_taken', { ascending: true })
    .limit(limit);

  if (error) throw error;
  return data;
};
