import React from 'react';
import {removeEmptySpacesFromArray} from "./WorkInformation"

const EducationInformation = ({ educationArray, setEducationArray ,setFormDataEducation }) => {

  const handleEditEducation = (i) => {
    setFormDataEducation({...educationArray[i], index: i});
  }

  const handleDeteleEducation = (index) => {
    setEducationArray( (prevEducationArray) => {
      const newArray = [...prevEducationArray];
      newArray[index] = null;
      return removeEmptySpacesFromArray(newArray);
    })
  }

  return (
    <div className="education-info">
      <h2>Educational Experience</h2>
      {educationArray.map((elem, index) => (
        <div key={index} className="education-entry">
          <button className="edit-button" onClick={() => handleEditEducation(index)}>Edit</button>
          <button className="delete-button" onClick={() => handleDeteleEducation(index)}>Del</button>
          <p><strong>School Name:</strong> {elem.schoolName}</p>
          <p><strong>Title:</strong> {elem.title}</p>
          <p><strong>Date of Study:</strong> {elem.dateOfStudy}</p>
        </div>
      ))}
    </div>
  );
};

export default EducationInformation;
