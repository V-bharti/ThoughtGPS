import ThoughtInputCard from '../components/ThoughtInputCard';
import EmotionInsightsCard from '../components/EmotionInsightsCard';
import MindMapCard from '../components/MindMapCard';
import ActionSuggestionsCard from '../components/ActionSuggestionsCard';

export default function Home() {
  const dummyEmotions = ["Anxiety", "Hope", "Sadness", "Relief"];
  const dummyActions = ["Go for a walk", "Write in your journal", "Plan tomorrow", "Drink water"];

  return (
    <main className="bg-gray-50 min-h-screen p-8">
      <ThoughtInputCard />
      <EmotionInsightsCard emotions={dummyEmotions} />
      <MindMapCard />
      <ActionSuggestionsCard actions={dummyActions} />
    </main>
  );
}
