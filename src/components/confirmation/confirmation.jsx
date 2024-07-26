import React from 'react';
import { useLocation } from 'react-router-dom';
import './confirmation.scss';

const ConfirmationPage = () => {
  const  location  = useLocation();
  const Name = location.state.userName || {};

  return (
    <div className='confirm'>
      <h1>Registration Confirmed!</h1>
      {Name && <p>Hi {Name}, thank you for joining our waitlist!</p>}
      {/* <p>We've added You to the Waitlist.</p> */}
    </div>
  );
};

export default ConfirmationPage;





