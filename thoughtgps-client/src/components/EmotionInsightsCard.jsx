// EmotionInsightsCard.jsx
export default function EmotionInsightsCard({ emotions = [] }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-xl mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4">Emotional Insights</h2>
      <ul className="grid grid-cols-2 gap-4">
        {emotions.map((e, i) => (
          <li key={i} className="p-3 bg-blue-100 rounded-lg text-blue-800 font-medium">
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
}
