import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mentorsData from '../mentors.json'; // Adjust the path according to your file structure

const MentorList = ({ onSelectMentor }) => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    setMentors(mentorsData);
  }, []);

  const navigate = useNavigate();

  const handleSelectMentor = (mentor) => {
    onSelectMentor(mentor);
    navigate('/booking');
  };

  return (
    <div className='container'>
      {mentors.length > 0 ? (
        mentors.map(mentor => (
          <div className='mentor-card' key={mentor.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <img src={mentor.profilePicture} alt={`${mentor.name}`} style={{ width: '100px', borderRadius: '50%' }} />
            <h3>{mentor.name}</h3>
            <p>Expertise: {mentor.expertise}</p>
            <p>Availability: {mentor.availability}</p>
            <p>Rating: {mentor.rating}</p>
            <p>Years of Experience: {mentor.yearsOfExperience}</p>
            <p>Bio: {mentor.bio}</p>
            <button onClick={() => handleSelectMentor(mentor)} style={{ marginTop: '10px' }}>
              Select Mentor
            </button>
          </div>
        ))
      ) : (
        <p>No mentors available.</p>
      )}
    </div>
  );
};

export default MentorList;
