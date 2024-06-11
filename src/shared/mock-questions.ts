import { Question } from '@/shared/types.ts';
import { ComparisonOperations } from '@/shared/enums.ts';

export const MOCK_QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'Does your business operate in CA?',
    type: 'YesNo',
    conditions: [
      {
        comparisonOperation: ComparisonOperations.Equal,
        answer: 'Yes',
        goTo: 1,
      },
      {
        comparisonOperation: ComparisonOperations.Equal,
        answer: 'No',
        goTo: -1,
      },
    ],
  },
  {
    id: 2,
    question: 'How many employees do you have?',
    type: 'Number',
    conditions: [
      {
        comparisonOperation: ComparisonOperations.MoreThan,
        answer: 100,
        goTo: -1,
      },
      {
        comparisonOperation: ComparisonOperations.LessThanOrEqual,
        answer: 100,
        goTo: 2,
      },
    ],
  },
  {
    id: 3,
    question: 'Do you serve food?',
    type: 'YesNo',
    conditions: [
      {
        comparisonOperation: ComparisonOperations.Equal,
        answer: 'Yes',
        goTo: 3,
      },
      {
        comparisonOperation: ComparisonOperations.Equal,
        answer: 'No',
        goTo: 5,
      },
    ],
  },
  {
    id: 4,
    question: 'Do you serve hot food?',
    type: 'YesNo',
    conditions: [
      {
        comparisonOperation: ComparisonOperations.Equal,
        answer: 'Yes',
        goTo: -1,
      },
      {
        comparisonOperation: ComparisonOperations.Equal,
        answer: 'No',
        goTo: 4,
      },
    ],
  },
  {
    id: 5,
    question: 'Are you open past midnight?',
    type: 'YesNo',
    conditions: [
      {
        comparisonOperation: ComparisonOperations.Equal,
        answer: 'Yes',
        goTo: -1,
      },
      {
        comparisonOperation: ComparisonOperations.Equal,
        answer: 'No',
        goTo: -1,
      },
    ],
  },
  {
    id: 6,
    question: 'Do you host live music?',
    type: 'YesNo',
    conditions: [
      {
        comparisonOperation: ComparisonOperations.Equal,
        answer: 'Yes',
        goTo: -1,
      },
      {
        comparisonOperation: ComparisonOperations.Equal,
        answer: 'No',
        goTo: -1,
      },
    ],
  },
];
