import React, { useState } from 'react';
import "./FormStyles.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('All fields are required!');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Please enter a valid email!');
      return;
    }

    // Send data to Formspree
    try {
      const response = await fetch('https://formspree.io/f/mwkdboyp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        const data = await response.json();
        alert(data.error);
      }

    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Error submitting the form. Please try again later.');
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        
        <label>Email</label>
        <input 
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        
        <label>Subject</label>
        <input 
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
        />
        
        <label>Message</label>
        <textarea 
          rows="6" 
          placeholder="Type your message here"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
        
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Form;
