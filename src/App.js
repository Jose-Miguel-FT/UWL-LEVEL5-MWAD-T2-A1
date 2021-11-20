import React from 'react';
import './style.css';
import MedicalTreatment from './components/MedicalTreatment';

{
  /*
  One instance of MedicalTreatment has been created.
  Using props, the values stored in the medicalTreatment1 object
  have been passed on to the MedicalTreatment.js component. 
  */
}

export default function App() {
  const medicalTreatment1 = {
    treatId: '001',
    treatCourseId: '010',
    type: 'alpha',
    category: 'bravo',
    name: 'charlie',
    startDate: new Date(2021, 10, 19).toLocaleDateString(),
  };
  return (
    <div>
      <h1>LH MEDICAL COMPANY</h1>
      <br />
      <MedicalTreatment medicalTreatment={medicalTreatment1} />
    </div>
  );
}
