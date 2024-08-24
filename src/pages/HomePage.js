import React from 'react';
import { useNavigate } from 'react-router-dom';
import MentorList from '../components/MentorList';

const HomePage = ({ onSelectMentor }) => {
  const navigate = useNavigate();

  const handleSelectMentor = (mentor) => {
    onSelectMentor(mentor);
    navigate('/mentor');
  };

  return (
    <div>
      <h1>Welcome to CareerCarve Scheduler</h1>
      <MentorList onSelectMentor={handleSelectMentor} />
    </div>
  );
};

export default HomePage;
