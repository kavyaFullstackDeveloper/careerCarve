import React from 'react';
import BookingForm from '../components/BookingForm';

const BookingPage = ({ mentor, student }) => {
  return (
    <div>
      <BookingForm mentor={mentor} student={student} />
    </div>
  );
};

export default BookingPage;
