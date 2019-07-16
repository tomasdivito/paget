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
      <div className="contact-links">
        <p>
         <span role="img" aria-label="email emoji">📧</span>
         <a href="mailto:tomasdv2@gmail.com">tomasdv2@gmail.com</a>
        </p>
        <p>
          <span role="img" aria-label="phone emoji">📱</span>
          <a href="tel:541167193192">+54-11-67193192</a>
        </p>
      </div>
    </div>
  );
};
