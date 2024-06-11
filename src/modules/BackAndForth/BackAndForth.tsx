import useQuestionsStore from '@/state/useStore.ts';
import { Button } from '@/components/ui/button.tsx';

export default () => {
  const {
    activeQuestionIndex,
    questions,
    goToNextQuestion,
    goToPreviousQuestion,
    finished,
  } = useQuestionsStore();

  if (finished) {
    return <></>;
  }

  return (
    <>
      {activeQuestionIndex !== null && activeQuestionIndex > 0 && (
        <div className="absolute top-1/2 left-10">
          <Button variant="ghost" onClick={goToPreviousQuestion}>
            Previous
          </Button>
        </div>
      )}
      {activeQuestionIndex !== null &&
        activeQuestionIndex < questions.length - 1 && (
          <div className="absolute top-1/2 right-10">
            <Button variant="ghost" onClick={goToNextQuestion}>
              Next{' '}
            </Button>
          </div>
        )}
    </>
  );
};
