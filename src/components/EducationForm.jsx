import React, { useState } from 'react';

const EducationForm = ({ formDataEducation, setFormDataEducation, setEducationArray}) => {
 
  const handleChangeEducation = (e) => {
    const { name, value } = e.target;
    setFormDataEducation({ ...formDataEducation, [name]: value });
  };

  const handleSubmitEducation = (e) => {
    e.preventDefault(); 
    if( formDataEducation.index == null ){
      setEducationArray((prevEducationArray) => [...prevEducationArray, formDataEducation]);
    }else{
      setEducationArray((prevEducationArray) => 
        prevEducationArray.map((edu, i) =>
          i === formDataEducation.index ? formDataEducation : edu
        )
      );
    }    
    setFormDataEducation({
      schoolName: '',
      title: '',
      dateOfStudy: '',
    });
};


  return (
    <form onSubmit={handleSubmitEducation}>
      <div>
        <label htmlFor="schoolName">School Name:</label>
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          value={formDataEducation.schoolName}
          onChange={handleChangeEducation}
        />
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formDataEducation.title}
          onChange={handleChangeEducation}
          required
        />
      </div>
      <div>
        <label htmlFor="dateOfStudy">Date:</label>
        <input
          type="date"
          id="dateOfStudy"
          name="dateOfStudy"
          value={formDataEducation.dateOfStudy}
          onChange={handleChangeEducation}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EducationForm;
