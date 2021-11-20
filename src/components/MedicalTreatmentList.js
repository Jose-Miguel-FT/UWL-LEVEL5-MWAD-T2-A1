import React from 'react';

function MedicalTreatmentList(props) {

  //const medicalTreatments = JSON.parse(props.value);
  const productsJ = props.string;


  return (
    <div>
      {productsJ}
    </div>
  )
}

export default MedicalTreatmentList;