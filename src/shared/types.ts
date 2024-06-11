import { ComparisonOperations } from '@/shared/enums.ts';

export interface Question {
  id: number;
  question: string;
  type: 'YesNo' | 'Number' | 'Select' | 'Text'; // Add more types as needed
  answer?: string | number;
  conditions?: {
    comparisonOperation: ComparisonOperations;
    answer: string | number;
    goTo: number; // Go-to if specific answer is given
  }[];
}
