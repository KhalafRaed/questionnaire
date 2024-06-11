import './App.css';
import Questions from '@/modules/QuestionsPanel';
import QuestionsList from '@/modules/QuestionsHistory';
import { useEffect } from 'react';
import useQuestionsStore from '@/state/useStore.ts';
import { fetchQuestions } from '@/services/questions.service.ts';
import BackAndForth from '@/modules/BackAndForth/BackAndForth.tsx';

function App() {
  const { isLoading, setQuestions, setIsLoading } = useQuestionsStore();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetchQuestions();
        setQuestions(response);
      } catch (error) {
        console.error('Failed to fetch questions:', error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden font-mono">
      <div className="w-2/3 bg-green-50 relative">
        <Questions />
        <BackAndForth />
      </div>
      <div className="w-1/3 bg-blue-50">
        <QuestionsList />
      </div>
    </div>
  );
}

export default App;
