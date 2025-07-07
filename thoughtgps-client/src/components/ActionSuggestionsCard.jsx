// ActionSuggestionsCard.jsx
export default function ActionSuggestionsCard({ actions = [] }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-xl mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4">Suggested Actions</h2>
      <ul className="list-disc list-inside text-gray-700">
        {actions.map((action, i) => (
          <li key={i}>{action}</li>
        ))}
      </ul>
    </div>
  );
}
