import { ComparisonOperations, QuestionType } from '@/shared/enums.ts';

export interface Question {
  id: number;
  question: string;
  type: QuestionType;
  answer: string | number;
}

export interface YesNoQuestion extends Question {
  goToIfYes: number;
  goToIfNo: number;
}

export interface NumberQuestion extends Question {
  rules: {
    comparisonOperation: ComparisonOperations;
    goToIfSatisfied: number;
    goToOtherwise: number;
  }[];
}

export interface SelectQuestion extends Question {
  options: {
    label: string;
    goTo: number;
  }[];
}

export interface TextQuestion extends Question {}
