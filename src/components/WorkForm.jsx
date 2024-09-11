import React, { useState } from 'react';

/*
Name, email, phone

Educational experience: schoo name, title of study, date of study
Practice: company name, position title, 
          main responsibilities of your jobs, 
          date from and until when you worked for that company

*/


const WorkForm = ({formDataWork, setFormDataWork, setWorkArray}) => {
 
  const handleChangeWork = (e) => {
    const { name, value } = e.target;
    setFormDataWork({ ...formDataWork, [name]: value });
  };

  const handleSubmitWork = (e) => {
      e.preventDefault(); 
      if( formDataWork.index == null ){
        setWorkArray((prevWorkArray) => [...prevWorkArray, formDataWork]);
      }else{
        setWorkArray((prevWorkArray) => 
          prevWorkArray.map((work, i) =>
            i === formDataWork.index ? formDataWork : work
          )
        );
      }    
      setFormDataWork({
          companyName: '',
          positionTitle: '',
          responsabilities: '',
          dateStart: '',
          dateEnd: '',
      });
  };

  return (
    <form onSubmit={handleSubmitWork}>
      <div>
        <label htmlFor="name">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formDataWork.companyName}
          onChange={handleChangeWork}
        />
      </div>
      <div>
        <label htmlFor="positionTitle">Position title:</label>
        <input
          type="text"
          id="positionTitle"
          name="positionTitle"
          value={formDataWork.positionTitle}
          onChange={handleChangeWork}
          required
        />
      </div>
      <div>
        <label htmlFor="responsabilities">Responsibilities:</label>
        <input
          type="text"
          id="responsabilities"
          name="responsabilities"
          value={formDataWork.responsabilities}
          onChange={handleChangeWork}
        />
      </div>
      <div>
        <label htmlFor="dateStart">Date start:</label>
        <input
          type="date"
          id="dateStart"
          name="dateStart"
          value={formDataWork.dateStart}
          onChange={handleChangeWork}
        />
      </div>
      <div>
        <label htmlFor="phone">Date end:</label>
        <input
          type="date"
          id="dateEnd"
          name="dateEnd"
          value={formDataWork.dateEnd}
          onChange={handleChangeWork}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default WorkForm;
