import { Question } from '@/shared/types.ts';
import { create } from 'zustand';

interface QuestionsState {
  finished: boolean;
  questions: Question[];
  activeQuestion: Question | null; // Track the active question
  setQuestions: (questions: Question[]) => void;
  updateQuestion: (id: number, answer: string | number) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  setActiveQuestion: (index: number | null) => void;
  goToQuestion: (index: number) => void;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  finish: () => void;
}

const useQuestionsStore = create<QuestionsState>((set) => ({
  questions: [],
  activeQuestion: null,
  isLoading: false,
  finished: false,
  setIsLoading: (isLoading) => set({ isLoading }),
  setQuestions: (questions) => set({ questions, activeQuestion: questions[0] }),
  updateQuestion: (id, answer) =>
    set((state) => ({
      questions: state.questions.map((question) =>
        question.id === id ? { ...question, answer } : question
      ),
    })),
  setActiveQuestion: (index) => {
    set((state) => {
      const question = index !== null ? state.questions[index] : null;
      return {
        activeQuestion: question,
      };
    });
  },
  goToQuestion: (index) => {
    set((state) => {
      const question = state.questions[index];
      return {
        activeQuestion: question,
      };
    });
  },
  goToNextQuestion: () => {
    set((state) => {
      if (state.activeQuestion) {
        const currentIndex = state.questions.indexOf(state.activeQuestion);
        const nextIndex = currentIndex + 1;
        if (nextIndex < state.questions.length) {
          const nextQuestion = state.questions[nextIndex];
          return {
            activeQuestion: nextQuestion,
          };
        } else {
          return {
            finished: true,
          };
        }
      }
      return {};
    });
  },
  goToPreviousQuestion: () => {
    set((state) => {
      if (state.activeQuestion) {
        const currentIndex = state.questions.indexOf(state.activeQuestion);
        const previousIndex = currentIndex - 1;
        if (previousIndex >= 0) {
          const previousQuestion = state.questions[previousIndex];
          return {
            activeQuestion: previousQuestion,
          };
        }
      }
      return {};
    });
  },
  finish: () => {
    set({ finished: true });
  },
}));

export default useQuestionsStore;
