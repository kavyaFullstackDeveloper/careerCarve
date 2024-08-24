import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import PaymentPage from './pages/PaymentPage'; // Correct the import name if needed
import MentorPage from './pages/MentorPage';

const App = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [student] = useState({ id: 1, name: 'John Doe' });
  const [booking, setBooking] = useState(null);

  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage onSelectMentor={setSelectedMentor} />}
      />
      <Route
        path="/mentor"
        element={<MentorPage mentor={selectedMentor} student={student} />}
      />
      <Route
        path="/booking"
        element={<BookingPage mentor={selectedMentor} student={student} />}
      />
      <Route
        path="/payment"
        element={<PaymentPage booking={booking} onCompletePayment={() => alert('Payment Successful!')} />}
      />
    </Routes>
  );
};

export default App;
