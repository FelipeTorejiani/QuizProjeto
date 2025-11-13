import { useState } from 'react';
import { StartScreen } from './components/StartScreen';
import { QuestionCard } from './components/QuestionCard';
import { ProgressBar } from './components/ProgressBar';
import { ResultScreen } from './components/ResultScreen';
import { useQuiz } from './hooks/useQuiz';
import { Timer } from 'lucide-react';

type GameState = 'start' | 'playing' | 'finished';

function App() {
  const [gameState, setGameState] = useState<GameState>('start');
  const {
    state,
    selectAnswer,
    nextQuestion,
    resetQuiz,
    getCurrentQuestion,
    getProgress,
    getLevel,
    totalQuestions
  } = useQuiz();

  const handleStart = () => {
    setGameState('playing');
    resetQuiz();
  };

  const handleNext = () => {
    if (state.currentQuestionIndex + 1 >= totalQuestions) {
      setGameState('finished');
    }
    nextQuestion();
  };

  const handleRestart = () => {
    setGameState('start');
    resetQuiz();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (gameState === 'start') {
    return <StartScreen onStart={handleStart} />;
  }

  if (gameState === 'finished') {
    return (
      <ResultScreen
        score={state.score}
        totalQuestions={totalQuestions}
        level={getLevel()}
        timeElapsed={state.timeElapsed}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-white">
            <Timer className="w-5 h-5 text-cyan-400" />
            <span className="font-mono text-lg">{formatTime(state.timeElapsed)}</span>
          </div>
          <div className="text-white font-semibold">
            Pontuação: <span className="text-cyan-400">{state.score}</span>/{totalQuestions}
          </div>
        </div>
        <ProgressBar progress={getProgress()} />
      </div>

      <QuestionCard
        question={getCurrentQuestion()}
        selectedAnswer={state.selectedAnswer}
        showFeedback={state.showFeedback}
        isCorrect={state.isCorrect}
        onSelectAnswer={selectAnswer}
        onNext={handleNext}
        currentIndex={state.currentQuestionIndex}
        totalQuestions={totalQuestions}
      />
    </div>
  );
}

export default App;
