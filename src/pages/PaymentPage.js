import React from 'react';
import PaymentPage from '../components/PaymentPage';

const Payment = ({ booking, onCompletePayment }) => {
  return (
    <div>
      <PaymentPage booking={booking} onCompletePayment={onCompletePayment} />
    </div>
  );
};

export default Payment;
