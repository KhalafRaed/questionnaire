import { Question } from '@/shared/types.ts';
import { ComparisonOperations } from '@/shared/enums.ts';

export const calculateNextQuestionIndex = (
  question: Question,
  answer: string | number
) => {
  if (question.conditions && question.conditions.length > 0) {
    for (const condition of question.conditions) {
      switch (condition.comparisonOperation) {
        case ComparisonOperations.MoreThan:
          if (answer > condition.answer) {
            return condition.goTo;
          }
          break;
        case ComparisonOperations.MoreThanOrEqual:
          if (answer >= condition.answer) {
            return condition.goTo;
          }
          break;
        case ComparisonOperations.LessThan:
          if (answer < condition.answer) {
            return condition.goTo;
          }
          break;
        case ComparisonOperations.LessThanOrEqual:
          if (answer <= condition.answer) {
            return condition.goTo;
          }
          break;
        case ComparisonOperations.Equal:
          if (answer === condition.answer) {
            return condition.goTo;
          }
          break;
        case ComparisonOperations.NotEqual:
          if (answer !== condition.answer) {
            return condition.goTo;
          }
          break;
        default:
          break;
      }
    }
  }
};
