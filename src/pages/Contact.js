import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("Sending your message...");

    emailjs.sendForm(
      'service_c8nvcpy',   // Your Service ID
      'template_yn8mh1g',  // Your Template ID
      form.current, 
      'CZV54X3kO4V_UvNLr'  // Your Public Key
    )
    .then((result) => {
        console.log(result.text);
        setIsSending(false);
        setStatusMessage("Success! I'll get back to you shortly.");
        e.target.reset(); // This clears the form boxes
    }, (error) => {
        console.log(error.text);
        setIsSending(false);
        setStatusMessage("Oops! Something went wrong. Please try again.");
    });
  };

  return (
    <div className="contact-container">
      <h2 className="accent-text" style={{ fontSize: '2rem', marginBottom: '10px' }}>Let's Connect</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
        Currently looking for Data Analyst opportunities. Drop a message!
      </p>

      <div className="glass card contact-card">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label className="accent-text" style={{fontSize: '0.7rem'}}>Name</label>
            <input 
              type="text" 
              name="user_name" 
              placeholder="Your Full Name" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label className="accent-text" style={{fontSize: '0.7rem'}}>Email</label>
            <input 
              type="email" 
              name="user_email" 
              placeholder="email@example.com" 
              required 
            />
          </div>

          <div className="form-group">
            <label className="accent-text" style={{fontSize: '0.7rem'}}>Message</label>
            <textarea 
              name="message" 
              rows="6" 
              placeholder="How can I help you?" 
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="btn-glow btn-submit" 
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {statusMessage && (
            <p style={{ 
              marginTop: '20px', 
              textAlign: 'center', 
              color: statusMessage.includes("Success") ? "#22c55e" : "#ef4444",
              fontSize: '0.9rem',
              fontWeight: '500'
            }}>
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;