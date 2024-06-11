import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useState } from 'react';
import useQuestionsStore from '@/state/useStore.ts';
import { calculateNextQuestionIndex } from '@/shared/utils.ts';

export default () => {
  const {
    updateQuestion,
    activeQuestion,
    finish,
    goToNextQuestion,
    goToQuestion,
  } = useQuestionsStore();
  const [number, setNumber] = useState<number | undefined>();

  const onAnswer = () => {
    updateQuestion(activeQuestion!.id, number!);
    const nextQuestionIndex = calculateNextQuestionIndex(
      activeQuestion!,
      number!
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
    <div className="flex items-center justify-center gap-5">
      <Input
        type="number"
        placeholder="Number..."
        onChange={(e) => setNumber(+e.target.value)}
        value={number}
      />
      <Button disabled={number === undefined} onClick={onAnswer}>
        Submit
      </Button>
    </div>
  );
};
