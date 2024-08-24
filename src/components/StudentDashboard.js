import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MentorList from './MentorList';
import BookingList from './BookingList';

const StudentDashboard = ({ student }) => {
  const [bookings, setBookings] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bookingResponse, mentorResponse] = await Promise.all([
          axios.get(`/api/bookings?studentId=${student.id}`),
          axios.get('/api/mentors'),
        ]);

        setBookings(bookingResponse.data);
        setMentors(mentorResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [student.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {student.name}</h1>

      <section>
        <h2>Your Booked Sessions</h2>
        {bookings.length > 0 ? (
          <BookingList bookings={bookings} />
        ) : (
          <p>You have no booked sessions.</p>
        )}
      </section>

      <section>
        <h2>Available Mentors</h2>
        <MentorList mentors={mentors} student={student} />
      </section>
    </div>
  );
};

export default StudentDashboard;
