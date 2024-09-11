import React, { useState } from 'react';

/*
Name, email, phone

Educational experience: schoo name, title of study, date of study
Practice: company name, position title, 
          main responsibilities of your jobs, 
          date from and until when you worked for that company

*/


const ContactForm = ({formDataContact, setFormDataContact,  
                      lastFormDataContact, setLastFormDataContact}) => {
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDataContact({ ...formDataContact, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLastFormDataContact(formDataContact);
        setFormDataContact({
          name: '',
          email: '',
          phone: ''
        })
    };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formDataContact.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formDataContact.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formDataContact.phone}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
