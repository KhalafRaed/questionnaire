import useQuestionsStore from '@/state/useStore.ts';
import { useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card.tsx';

export default () => {
  const { questions } = useQuestionsStore();

  const answeredQuestions = useMemo(
    () => questions.filter((question) => Boolean(question.answer)),
    [questions]
  );

  return (
    <div className="w-full h-full">
      {answeredQuestions.map((answeredQuestion) => (
        <Card className="m-5">
          <CardContent className="mt-5 flex gap-2">
            {answeredQuestion?.question}
            <strong>{answeredQuestion.answer}</strong>
          </CardContent>
        </Card>
      ))}
      {answeredQuestions?.length === 0 && (
        <div className="h-full w-full flex items-center justify-center">
          Questions Records
        </div>
      )}
    </div>
  );
};
