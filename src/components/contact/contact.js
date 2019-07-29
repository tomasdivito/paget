import React, { useState } from 'react';

import './contact.scss';

export default () => {
  const [form, setForm] = useState({ email: null, subject: null, message: null });

  const onEmailChange = event =>
    setForm({ ...form, email: event.target.value });
  const onSubjectChange = event =>
    setForm({ ...form, subject: event.target.value });
  const onMessageChange = event =>
    setForm({ ...form, message: event.target.value });

  return (
    <div className="contact-section">
      <h1>Contact me!</h1>
      <form name="contact" method="POST" netlify>
        <p>
          <label>Your Name: <input type="text" name="name" /></label>   
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Role: <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};
