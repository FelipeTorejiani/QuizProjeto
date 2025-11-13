import { useState, useEffect, useCallback } from 'react';
import { Question, quizQuestions, getLevelByScore } from '../data/questions';

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answeredQuestions: number[];
  selectedAnswer: number | null;
  showFeedback: boolean;
  isCorrect: boolean;
  isFinished: boolean;
  timeElapsed: number;
  questionStartTime: number;
}

export const useQuiz = () => {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    answeredQuestions: [],
    selectedAnswer: null,
    showFeedback: false,
    isCorrect: false,
    isFinished: false,
    timeElapsed: 0,
    questionStartTime: Date.now()
  });

  useEffect(() => {
    if (state.isFinished) return;

    const timer = setInterval(() => {
      setState(prev => ({
        ...prev,
        timeElapsed: prev.timeElapsed + 1
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, [state.isFinished]);

  const selectAnswer = useCallback((answerIndex: number) => {
    if (state.showFeedback) return;

    const currentQuestion = quizQuestions[state.currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correctAnswer;

    setState(prev => ({
      ...prev,
      selectedAnswer: answerIndex,
      showFeedback: true,
      isCorrect,
      score: isCorrect ? prev.score + 1 : prev.score
    }));
  }, [state.currentQuestionIndex, state.showFeedback]);

  const nextQuestion = useCallback(() => {
    const nextIndex = state.currentQuestionIndex + 1;

    if (nextIndex >= quizQuestions.length) {
      setState(prev => ({
        ...prev,
        isFinished: true
      }));
    } else {
      setState(prev => ({
        ...prev,
        currentQuestionIndex: nextIndex,
        selectedAnswer: null,
        showFeedback: false,
        isCorrect: false,
        answeredQuestions: [...prev.answeredQuestions, prev.currentQuestionIndex],
        questionStartTime: Date.now()
      }));
    }
  }, [state.currentQuestionIndex]);

  const resetQuiz = useCallback(() => {
    setState({
      currentQuestionIndex: 0,
      score: 0,
      answeredQuestions: [],
      selectedAnswer: null,
      showFeedback: false,
      isCorrect: false,
      isFinished: false,
      timeElapsed: 0,
      questionStartTime: Date.now()
    });
  }, []);

  const getCurrentQuestion = useCallback((): Question => {
    return quizQuestions[state.currentQuestionIndex];
  }, [state.currentQuestionIndex]);

  const getProgress = useCallback((): number => {
    return ((state.currentQuestionIndex) / quizQuestions.length) * 100;
  }, [state.currentQuestionIndex]);

  const getLevel = useCallback((): string => {
    return getLevelByScore(state.score, quizQuestions.length);
  }, [state.score]);

  return {
    state,
    selectAnswer,
    nextQuestion,
    resetQuiz,
    getCurrentQuestion,
    getProgress,
    getLevel,
    totalQuestions: quizQuestions.length
  };
};
