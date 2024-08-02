import React from 'react';
import { useLocation } from 'react-router-dom';
import {motion as m} from 'framer-motion';
import './confirmation.scss';

const ConfirmationPage = () => {
  const  location  = useLocation();
  const Name = location.state.userName || {};

  return (
    <div className='confirm'>
    <m.div className='div' initial={{y: "220px"}} animate={{y: 0}} transition={{duration: 0.7,delay: 0.5}}>
      <m.h1 animate={{scale:[1, 1.1, 1]}} transition={{duration: 3, repeat: Infinity}}>Registration Confirmed!</m.h1>
      {Name && <p>Hi {Name}, thank you for joining our waitlist!</p>}
      {/* <p>We've added You to the Waitlist.</p> */}
      </m.div>
    </div>
  );
};

export default ConfirmationPage;





