import React, { useState } from 'react';
import ContactInformation from './ContactInformation';
import EducationInformation from './EducationInformation';
import WorkInformation from './WorkInformation';
import '../styles/cv.css';
/*
Name, email, phone

Educational experience: schoo name, title of study, date of study
Practice: company name, position title, 
          main responsibilities of your jobs, 
          date from and until when you worked for that company

*/

const CV = ({
             workArray, 
             setFormDataWork,
             setWorkArray,

             educationArray,
             setEducationArray,
             setFormDataEducation,

             lastFormDataContact,
             setFormDataContact,
             setLastFormDataContact
                           }) => {
  return (
    <div>
        { (lastFormDataContact!=null) && <ContactInformation lastFormDataContact={lastFormDataContact} setFormDataContact={setFormDataContact}
                                                      setLastFormDataContact={setLastFormDataContact} />}
        { (workArray.length != 0) && <WorkInformation workArray={workArray} setFormDataWork={setFormDataWork} setWorkArray={setWorkArray}/>}
        { (educationArray.length != 0) && <EducationInformation educationArray={educationArray} setEducationArray={setEducationArray} setFormDataEducation={setFormDataEducation}/>}
    </div>
  );
};

export default CV;
