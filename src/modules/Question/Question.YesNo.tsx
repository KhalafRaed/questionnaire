import { Button } from '@/components/ui/button.tsx';
import { calculateNextQuestionIndex } from '@/shared/utils.ts';
import useQuestionsStore from '@/state/useStore.ts';

export default () => {
  const {
    updateQuestion,
    activeQuestion,
    finish,
    goToNextQuestion,
    goToQuestion,
  } = useQuestionsStore();

  const onAnswer = (answer: string) => {
    updateQuestion(activeQuestion!.id, answer);

    const nextQuestionIndex = calculateNextQuestionIndex(
      activeQuestion!,
      answer
    );

    if (nextQuestionIndex === -1) {
      finish();
    } else if (!nextQuestionIndex) {
      goToNextQuestion();
    } else {
      goToQuestion(nextQuestionIndex);
    }
  };

  return (
    <>
      <Button variant="default" onClick={() => onAnswer('Yes')}>
        Yes
      </Button>
      <Button variant="destructive" onClick={() => onAnswer('No')}>
        No
      </Button>
    </>
  );
};
