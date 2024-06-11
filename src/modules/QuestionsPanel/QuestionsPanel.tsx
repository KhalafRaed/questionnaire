import useQuestionsStore from '@/state/useStore.ts';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import QuestionYesNo from '@/modules/Question/Question.YesNo.tsx';
import QuestionNumber from '@/modules/Question/Question.Number.tsx';

export default () => {
  const { activeQuestion, finished } = useQuestionsStore();

  const renderQuestionAnswers = () => {
    switch (activeQuestion?.type) {
      case 'YesNo':
        return <QuestionYesNo />;
      case 'Number':
        return <QuestionNumber />;
      case 'Select':
        return <div>Coming Soon!</div>;
      case 'Text':
        return <div>Coming Soon!</div>;
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      {finished ? (
        <>Thank You!</>
      ) : (
        <Card className="w-[550px]">
          <CardContent className="mt-10">
            {activeQuestion?.question}
          </CardContent>
          <CardFooter className="flex justify-between">
            {renderQuestionAnswers()}
          </CardFooter>
        </Card>
      )}
    </div>
  );
};
