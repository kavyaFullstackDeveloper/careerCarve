import React from 'react';

const PaymentPage = ({ booking, onCompletePayment }) => {
  const calculateCost = () => {
    return booking.duration === 30 ? 2000 : booking.duration === 45 ? 3000 : 4000;
  };

  return (
    <div>
      <h2>Payment Details</h2>
      <p>Mentor: {booking.mentor.name}</p>
      <p>Duration: {booking.duration} mins</p>
      <p>Cost: ₹{calculateCost()}</p>
      <button onClick={onCompletePayment}>Complete Payment</button>
    </div>
  );
};

export default PaymentPage;
