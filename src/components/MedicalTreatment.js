import React from 'react';

{
  /*
  React component MedicalTreatment containing the attributes passed through props.
  This component's function is to print in a list all the attributes from props.
  An instance of this component has been created through App.js.
  */
}

function MedicalTreatment(props) {
  return (
    <div>
      <ul>
        <li>{props.medicalTreatment.treatId}</li>
        <li>{props.medicalTreatment.treatCourseId}</li>
        <li>{props.medicalTreatment.type}</li>
        <li>{props.medicalTreatment.category}</li>
        <li>{props.medicalTreatment.name}</li>
        <li>{props.medicalTreatment.startDate}</li>
      </ul>
    </div>
  );
}

export default MedicalTreatment;
