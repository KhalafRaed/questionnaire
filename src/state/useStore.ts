import { Question } from '@/shared/types.ts';
import { create } from 'zustand';

interface QuestionsState {
  questions: Question[];
  setQuestions: (questions: Question[]) => void;
  updateQuestion: (id: number, answer: string) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const useQuestionsStore = create<QuestionsState>((set) => ({
  questions: [],
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
  setQuestions: (questions) => set({ questions }),
  updateQuestion: (id, answer) =>
    set((state) => ({
      questions: state.questions.map((question) =>
        question.id === id ? { ...question, answer } : question
      ),
    })),
}));

export default useQuestionsStore;
