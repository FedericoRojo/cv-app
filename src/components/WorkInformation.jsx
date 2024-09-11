import React from 'react';

const removeEmptySpacesFromArray = (newArray) => {
  /* [null, 1, 2, null, null, 3, null, 4, null, 5, null] => [1, 2, 3, 4, 5, null, null, null, null, null, null]*/  
  let i = 0;
  let j = 0;
  while( j < newArray.length ){
    if(newArray[i] == null){
      if(newArray[j] != null){
        newArray[i] = {
          ...newArray[j],
          index: i
        };
        newArray[j] = null;
        i++;
        j++;
      }else{
        j++;
      }
    }else{
      if(newArray[j] != null){
        i++;
        j++;
      }
    }
  }
  newArray.length = i;
  return newArray;
}

const WorkInformation = ({workArray, setFormDataWork, setWorkArray}) => {

  const handleEditWork = (i) => {
    setFormDataWork({...workArray[i], index: i});
  }
  

  const handleDeteleWork = (index) => {
    setWorkArray( (prevWorkArray) => {
      const newArray = [...prevWorkArray];
      newArray[index] = null;
      return removeEmptySpacesFromArray(newArray);
    })
  }
  

  return (
    <div className="work-info">
      <h2>Work Experience</h2>
      {
      workArray.map((work, index) => (
        <div key={index} className="work-entry">
          <button className="edit-button" onClick={() => handleEditWork(index)}>Edit</button>
          <button className="delete-button" onClick={() => handleDeteleWork(index)}>Del</button>
          <p><strong>Company Name:</strong> {work.companyName}</p>
          <p><strong>Position Title:</strong> {work.positionTitle}</p>
          <p><strong>Main Responsibilities:</strong> {work.responsabilities}</p>
          <p><strong>Worked From:</strong> {work.dateStart}</p>
          <p><strong>Worked Until:</strong> {work.dateEnd}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkInformation;
export {removeEmptySpacesFromArray};
