// ThoughtInputCard.jsx
export default function ThoughtInputCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-2">What's on your mind?</h2>
      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows={6}
        placeholder="Type your thoughts here..."
      ></textarea>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Analyze
      </button>
    </div>
  );
}
