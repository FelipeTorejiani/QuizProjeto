import { useState, useEffect } from 'react';
import { Trophy, Award, Clock, RotateCcw, Crown } from 'lucide-react';
import { getLevelColor } from '../data/questions';
import { saveRanking, getTopRankings, QuizRanking } from '../lib/supabase';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  level: string;
  timeElapsed: number;
  onRestart: () => void;
}

export const ResultScreen = ({
  score,
  totalQuestions,
  level,
  timeElapsed,
  onRestart
}: ResultScreenProps) => {
  const [playerName, setPlayerName] = useState('');
  const [savedToRanking, setSavedToRanking] = useState(false);
  const [rankings, setRankings] = useState<QuizRanking[]>([]);
  const [loading, setLoading] = useState(false);

  const percentage = Math.round((score / totalQuestions) * 100);
  const minutes = Math.floor(timeElapsed / 60);
  const seconds = timeElapsed % 60;

  useEffect(() => {
    loadRankings();
  }, []);

  const loadRankings = async () => {
    try {
      const data = await getTopRankings(10);
      setRankings(data || []);
    } catch (error) {
      console.error('Error loading rankings:', error);
    }
  };

  const handleSaveRanking = async () => {
    if (!playerName.trim() || savedToRanking) return;

    setLoading(true);
    try {
      await saveRanking({
        player_name: playerName.trim(),
        score,
        total_questions: totalQuestions,
        level,
        time_taken: timeElapsed
      });

      setSavedToRanking(true);
      await loadRankings();
    } catch (error) {
      console.error('Error saving ranking:', error);
      alert('Erro ao salvar no ranking. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="flex justify-center mb-6">
            <Trophy className="w-24 h-24 text-yellow-500 animate-bounce" />
          </div>

          <h1 className="text-5xl font-bold text-white mb-4">
            Quiz Finalizado!
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
              <Award className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <p className="text-slate-400 text-sm mb-1">Pontuação</p>
              <p className="text-3xl font-bold text-white">
                {score}/{totalQuestions}
              </p>
              <p className="text-cyan-400 font-medium mt-1">{percentage}%</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
              <Crown className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <p className="text-slate-400 text-sm mb-1">Nível Alcançado</p>
              <p className={`text-2xl font-bold ${getLevelColor(level)}`}>
                {level}
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
              <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <p className="text-slate-400 text-sm mb-1">Tempo Total</p>
              <p className="text-3xl font-bold text-white">
                {minutes}:{seconds.toString().padStart(2, '0')}
              </p>
            </div>
          </div>

          {!savedToRanking ? (
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Salvar no Ranking Global
              </h3>
              <div className="flex gap-3 max-w-md mx-auto">
                <input
                  type="text"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder="Digite seu nome"
                  className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  maxLength={30}
                  disabled={loading}
                />
                <button
                  onClick={handleSaveRanking}
                  disabled={!playerName.trim() || loading}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 disabled:cursor-not-allowed"
                >
                  {loading ? 'Salvando...' : 'Salvar'}
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 mb-6">
              <p className="text-green-100 font-medium">
                Pontuação salva com sucesso no ranking!
              </p>
            </div>
          )}

          {rankings.length > 0 && (
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-500" />
                Top 10 Ranking Global
              </h3>
              <div className="space-y-2">
                {rankings.map((ranking, index) => (
                  <div
                    key={ranking.id}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      index === 0
                        ? 'bg-yellow-500/20 border border-yellow-500/50'
                        : index === 1
                        ? 'bg-slate-600/30 border border-slate-500/50'
                        : index === 2
                        ? 'bg-orange-500/20 border border-orange-500/50'
                        : 'bg-slate-700/30'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-bold text-lg ${
                        index === 0 ? 'text-yellow-500' :
                        index === 1 ? 'text-slate-300' :
                        index === 2 ? 'text-orange-500' :
                        'text-slate-400'
                      }`}>
                        #{index + 1}
                      </span>
                      <div className="text-left">
                        <p className="text-white font-medium">{ranking.player_name}</p>
                        <p className="text-slate-400 text-sm">
                          {ranking.score}/{ranking.total_questions} pontos • {ranking.level}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-cyan-400 font-medium">
                        {Math.round((ranking.score / ranking.total_questions) * 100)}%
                      </p>
                      <p className="text-slate-400 text-sm">{formatTime(ranking.time_taken)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={onRestart}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Jogar Novamente
          </button>
        </div>
      </div>
    </div>
  );
};
