import { Trophy, Brain, Zap } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Brain className="w-24 h-24 text-cyan-400 animate-pulse" />
              <Zap className="w-8 h-8 text-yellow-400 absolute -top-2 -right-2 animate-bounce" />
            </div>
          </div>

          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            Desafie o Analista
          </h1>

          <p className="text-xl text-slate-300 max-w-lg mx-auto leading-relaxed">
            Teste seus conhecimentos em Sistemas de Informação e Tecnologia da Informação
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mb-12">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 hover:scale-105">
              <div className="text-cyan-400 mb-3">
                <Brain className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-white font-semibold mb-2">20 Perguntas</h3>
              <p className="text-slate-400 text-sm">Conceitos de TI e SI</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 hover:scale-105">
              <div className="text-cyan-400 mb-3">
                <Zap className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-white font-semibold mb-2">Feedback Imediato</h3>
              <p className="text-slate-400 text-sm">Aprenda com cada resposta</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 hover:scale-105">
              <div className="text-cyan-400 mb-3">
                <Trophy className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-white font-semibold mb-2">Ranking Global</h3>
              <p className="text-slate-400 text-sm">Compare seu desempenho</p>
            </div>
          </div>

          <button
            onClick={onStart}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-12 rounded-xl text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Começar Quiz
          </button>

          <div className="mt-8 text-slate-400 text-sm">
            <p>Categorias: Hardware • Software • Redes • Banco de Dados • Segurança • Protocolos</p>
          </div>
        </div>
      </div>
    </div>
  );
};
