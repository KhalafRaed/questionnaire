import { MOCK_QUESTIONS } from '@/shared/mock-questions.ts';
import { Question } from '@/shared/types.ts';

export const fetchQuestions = () => {
  return new Promise<Question[]>((resolve) => {
    resolve(MOCK_QUESTIONS);
  });
};
