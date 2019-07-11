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
      <form>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="name@example.com" onChange={onEmailChange}></input>
        </div>
        <div className="input-field">
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" placeholder="Your subject" onChange={onSubjectChange}></input>
        </div>
        <div className="input-field">
          <label htmlFor="message">Message</label>
          <textarea name="message" placeholder="Your message" onChange={onMessageChange}></textarea>
        </div>
        <button className="btn-selector" type="submit">
          Contact
        </button>
      </form>
    </div>
  );
};
