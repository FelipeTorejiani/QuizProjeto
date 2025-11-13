import { CheckCircle2, XCircle, Clock } from 'lucide-react';
import { Question } from '../data/questions';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  showFeedback: boolean;
  isCorrect: boolean;
  onSelectAnswer: (index: number) => void;
  onNext: () => void;
  currentIndex: number;
  totalQuestions: number;
}

export const QuestionCard = ({
  question,
  selectedAnswer,
  showFeedback,
  isCorrect,
  onSelectAnswer,
  onNext,
  currentIndex,
  totalQuestions
}: QuestionCardProps) => {
  const getOptionClasses = (index: number) => {
    const baseClasses = "w-full text-left p-4 rounded-lg border-2 transition-all duration-300 font-medium";

    if (!showFeedback) {
      return `${baseClasses} border-slate-700 bg-slate-800/50 hover:border-cyan-500 hover:bg-slate-700/50 text-white`;
    }

    if (index === question.correctAnswer) {
      return `${baseClasses} border-green-500 bg-green-500/20 text-green-100`;
    }

    if (index === selectedAnswer && !isCorrect) {
      return `${baseClasses} border-red-500 bg-red-500/20 text-red-100`;
    }

    return `${baseClasses} border-slate-700 bg-slate-800/30 text-slate-400`;
  };

  return (
    <div className="max-w-3xl w-full animate-slide-up">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-slate-400" />
          <span className="text-slate-400">
            Pergunta {currentIndex + 1} de {totalQuestions}
          </span>
        </div>
        <span className="px-4 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30">
          {question.category}
        </span>
      </div>

      <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-8 leading-relaxed">
          {question.question}
        </h2>

        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onSelectAnswer(index)}
              disabled={showFeedback}
              className={getOptionClasses(index)}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {showFeedback && index === question.correctAnswer && (
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                )}
                {showFeedback && index === selectedAnswer && !isCorrect && (
                  <XCircle className="w-6 h-6 text-red-500" />
                )}
              </div>
            </button>
          ))}
        </div>

        {showFeedback && (
          <div className="animate-fade-in">
            <div className={`p-4 rounded-lg mb-6 ${
              isCorrect
                ? 'bg-green-500/20 border border-green-500/50'
                : 'bg-red-500/20 border border-red-500/50'
            }`}>
              <p className={`font-medium ${isCorrect ? 'text-green-100' : 'text-red-100'}`}>
                {question.explanation}
              </p>
            </div>

            <button
              onClick={onNext}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Próxima Pergunta
            </button>
          </div>
        )}
      </div>

      <div className="mt-4 text-center text-slate-400 text-sm">
        <span className="inline-flex items-center gap-1">
          <span className="inline-block w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
          Dificuldade: {question.difficulty === 'easy' ? 'Fácil' : question.difficulty === 'medium' ? 'Média' : 'Difícil'}
        </span>
      </div>
    </div>
  );
};
