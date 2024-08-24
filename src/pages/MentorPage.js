import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';

const MentorPage = ({ mentor, student }) => {
  const [isBooking, setIsBooking] = useState(false);

  if (!mentor) {
    return <div>No mentor selected. Please go back and select a mentor.</div>;
  }

  const handleBookingClick = () => {
    setIsBooking(true);
  };

  return (
    <div>
      <h1>{mentor.name}</h1>
      <p>Expertise: {mentor.areas_of_expertise.join(', ')}</p>
      <p>Availability: {mentor.availability}</p>
      
      {!isBooking ? (
        <button onClick={handleBookingClick}>Book a Session</button>
      ) : (
        <BookingForm mentor={mentor} student={student} />
      )}
    </div>
  );
};

export default MentorPage;
