import React from 'react';

const CourseCard = ({ title, imageUrl, onLearnClick, onQuizClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <div className="flex justify-between">
          <button
            onClick={onLearnClick}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Learn
          </button>
          <button
            onClick={onQuizClick}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
          >
            Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;