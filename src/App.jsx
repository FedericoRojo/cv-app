import { useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import CV from "./components/CV"


function App() {

    const [formDataContact, setFormDataContact] = useState({
      name: '',
      email: '',
      phone: ''
      });
    const[lastFormDataContact, setLastFormDataContact] = useState(null);

    const [formDataEducation, setFormDataEducation] = useState({
        schoolName: '',
        title: '',
        dateOfStudy: '',
    });
    const [educationArray, setEducationArray] = useState([]);

    const [formDataWork, setFormDataWork] = useState({
        companyName: '',
        positionTitle: '',
        responsabilities: '',
        dateStart: '',
        dateEnd: '',
        index: null,
    });
    const [workArray, setWorkArray] = useState([]);
     
  return (
      <div className='general-container'>
        <Editor 
                formDataContact={formDataContact}
                setFormDataContact={setFormDataContact}
                lastFormDataContact={lastFormDataContact}
                setLastFormDataContact={setLastFormDataContact}

                formDataEducation={formDataEducation}
                setFormDataEducation={setFormDataEducation}
                educationArray={educationArray}
                setEducationArray={setEducationArray}

                formDataWork={formDataWork}
                setFormDataWork={setFormDataWork}
                workArray={workArray}
                setWorkArray={setWorkArray}
                 ></Editor>
        <CV lastFormDataContact={lastFormDataContact}
            setLastFormDataContact={setLastFormDataContact}
            setFormDataContact={setFormDataContact}
            workArray={workArray}
            setWorkArray={setWorkArray}
            setFormDataWork={setFormDataWork}
            educationArray={educationArray}
            setEducationArray={setEducationArray}
            setFormDataEducation={setFormDataEducation}
            ></CV>
      </div>
  )
}

export default App
