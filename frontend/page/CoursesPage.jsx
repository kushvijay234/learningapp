import React from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import image from '../src/assets/coursesbanner.jpg';

const CoursesSection = () => {
  const navigate = useNavigate();
  // const handleLearn = () => alert('Navigate to Learn Page');
  const handleLearn = () => navigate('/questionlist');
  const handleQuiz = () => alert('Navigate to Quiz Page');

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-6">
      <CourseCard
        title="Data Structures"
        imageUrl={image}
        onLearnClick={handleLearn}
        onQuizClick={handleQuiz}
      />
      <CourseCard
        title="Python"
        imageUrl={image}
        onLearnClick={handleLearn}
        onQuizClick={handleQuiz}
      />
      <CourseCard
        title="React Basics"
        imageUrl={image}
        onLearnClick={handleLearn}
        onQuizClick={handleQuiz}
      />
    </div>
  );
};

export default CoursesSection;