import React from 'react'

import emailjs from 'emailjs-com';

const Contact=()=> {

  const sendEmail=(e)=> {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_x4NmOJGo', e.target, 'user_h1q4ahlj07d5H9P3sTAry')
      .then((result) => {
        // debugger
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  var template_params = {
    "reply_to": "reply_to_value",
    "user_name": "user_name_value",
    "message": "message_value",
    "user_email": "user_email_value"
 }
 
 var service_id = "default_service";
 var template_id = "template_x4NmOJGo";
 emailjs.send(service_id, template_id, template_params);

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name:</label>
      <input type="text" name="user_name" placeholder="Your Name"/>
      <label>Email:</label>
      <input type="email" name="user_email" placeholder="JohnDoe@gmail.com"/>
      <label>Message:</label>
      <textarea name="message" placeholder="Leave message or concern"/>
      <input type="submit" value="Send" />
    </form>
  )
}

export default Contact
