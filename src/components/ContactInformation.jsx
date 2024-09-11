import React from 'react';

const ContactInformation = ({lastFormDataContact, setLastFormDataContact, setFormDataContact}) => {
  
  const handleEditContact = () => {
    setFormDataContact(lastFormDataContact);
  }

  const handleDeteleContact = () => {
    setLastFormDataContact(null);
  }

  return (
    <div className="contact-info">
      <button className="edit-button" onClick={handleEditContact}>Edit</button>
      <button className="delete-button" onClick={() => handleDeteleContact()}>Del</button>
      <h2>Contact Information</h2>
      <p>Name: {lastFormDataContact.name}</p>
      <p>Email: {lastFormDataContact.email}</p>
      <p>Phone: {lastFormDataContact.phone}</p>
    </div>
  );
};

export default ContactInformation;
