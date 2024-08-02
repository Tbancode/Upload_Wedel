import React, { useState } from 'react';             
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import './form.scss';
// import './NewsletterForm.scss'; // Import the SCSS file

const NewsletterForm = () => {
  // const [formName, setFormData] = useState({
  //   name: ''
    // phone: '+234 ',
    // email: ''
  // });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const [userName, setUsername] = useState('');

  const handleChange = (event) => {
    const userNameValue = event.target.value;
    setUsername(userNameValue);
  };
  

 
   function Submit(e){
    const formEle = document.querySelector("form");
    e.preventDefault()
    console.log("Sumbitted")
    const formData = new FormData(formEle)
  //   fetch ("https://script.google.com/macros/s/AKfycbw1UWnALHhWGQ8f5-6ZfnrSO0rY4E9WWPavaqRJxF-_FUKmzZIYE8Ab2X5MTfOFtbk/exec",
  //     {method: "POST",
  //     body: formData

  //  })
  try{
  const response =  fetch("https://script.google.com/macros/s/AKfycbw1UWnALHhWGQ8f5-6ZfnrSO0rY4E9WWPavaqRJxF-_FUKmzZIYE8Ab2X5MTfOFtbk/exec", {
          method: 'POST',
          body: formData,
        });
  
        if (response) {
          setMessage('Subscription successful!');
          navigate('/confirmation', {state: {userName}});
        } else {
          // const errorText = await response.text();
          setMessage('Subscription failed. Please try again.');
        }
      } catch (error) {
        setMessage('An error occurred. Please try again.');
        console.log(error);
      }
    };
  


  return (
    <div>

      <form className='form' onSubmit={(e) => Submit(e)}>
        <label>
          <input
            type="text"
            name="Name"
            value={userName}
            onChange={handleChange}
            required
            placeholder='Enter Your Name'
          />
        </label> 
        <br />
        <label>
          <input
            type="email"
            name="Email"
            // value={formData.Email}
            // onChange={handleChange}
            required
            placeholder='Enter Your Email'
          />
        </label>
        <br />
        <label>
          <InputMask
            mask="234 999 999 9999"
            maskChar=""
            // value={formData.Phone}
            // onChange={handleChange}
            name="Phone"
            required
            placeholder='Enter Your Phone Number'
          >
            {(inputProps) => <input {...inputProps} type="text" />}
          </InputMask>
        </label>
        <button type="submit">Join The Waitlist</button>
      </form>
      {message && <p>{message}</p>}

    </div>
  );
};

export default NewsletterForm;



// 