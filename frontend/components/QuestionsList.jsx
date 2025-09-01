import React, { useEffect, useState } from 'react';

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/questions')
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.questions); // ✅ Access the nested "questions" array
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching questions:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading questions...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Learn Questions</h1>
      {questions.map((q) => (
        <div key={q.id} className="mb-6 p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold mb-2">{q.question}</h2>

          <div className="text-sm text-gray-700 mb-2">
            <strong>Answer:</strong>
            <pre className="bg-gray-100 p-2 rounded mt-1 overflow-auto">
              {typeof q.answer === 'string'
                ? q.answer
                : JSON.stringify(q.answer, null, 2)}
            </pre>
          </div>

          <div className="text-sm text-gray-600">
            <strong>Explanation:</strong> {q.explanation}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionsList;