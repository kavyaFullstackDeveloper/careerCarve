import React, { useState } from 'react';
import { createBooking } from '../api/api';

const BookingForm = ({ mentor, student }) => {
  const [duration, setDuration] = useState(30);
  const [areaOfInterest, setAreaOfInterest] = useState('');

  const handleBooking = async () => {
    const bookingData = {
      student_id: student.id,
      mentor_id: mentor.id,
      duration,
      area_of_interest: areaOfInterest,
    };


    try {
      const response = await fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });
  
      if (response.ok) {
        const result = await response.json();
        alert('Booking successful!');
      } else {
        alert('Failed to book the session.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during booking.');
    }
  };

  if (!mentor) {
    return <p className="booking-form-message">Please select a mentor before booking a session.</p>;
  }

  return (
    <div className="booking-form-container">
      <h2 className="booking-form-title">Book a Session with {mentor.name}</h2>
      <div className="booking-form-group">
        <label className="booking-form-label">
          Duration:
          <select
            className="booking-form-select"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value={30}>30 mins</option>
            <option value={45}>45 mins</option>
            <option value={60}>60 mins</option>
          </select>
        </label>
      </div>
      <div className="booking-form-group">
        <label className="booking-form-label">
          Area of Interest:
          <input
            className="booking-form-input"
            type="text"
            value={areaOfInterest}
            onChange={(e) => setAreaOfInterest(e.target.value)}
          />
        </label>
      </div>
      <button className="booking-form-button" onClick={handleBooking}>
        Book Now
      </button>
    </div>
  );
};

export default BookingForm;
