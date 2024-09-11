import React, { useState } from 'react';
import ContactForm from './ContactForm';
import WorkForm from './WorkForm';
import EducationForm from './EducationForm';


const Editor = ({formDataContact,
                setFormDataContact,
                lastFormDataContact,
                setLastFormDataContact,

                formDataEducation,
                setFormDataEducation,
                setEducationArray,

                formDataWork,
                setFormDataWork,
                workArray,
                setWorkArray,
                }) => {
                    
    return (
        <div>
            <ContactForm formDataContact={formDataContact} setFormDataContact={setFormDataContact} 
                        lastFormDataContact={lastFormDataContact} setLastFormDataContact={setLastFormDataContact} />
            <WorkForm formDataWork={formDataWork} setFormDataWork={setFormDataWork}
                      workArray={workArray} setWorkArray={setWorkArray}/>
            <EducationForm formDataEducation={formDataEducation} 
                            setFormDataEducation={setFormDataEducation}
                            setEducationArray={setEducationArray} />
        </div>
    );
};

export default Editor;
