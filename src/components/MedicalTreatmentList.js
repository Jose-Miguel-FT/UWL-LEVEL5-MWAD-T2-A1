import React from 'react';

function MedicalTreatmentList(props) {
  //const medicalTreatments = JSON.parse(props.value);
  const productsJ = props.string;
  const medicalTreatmentsArray = JSON.parse(productsJ);

  const listMedicalTreats = medicalTreatmentsArray.map((item) => (
    <li>
      {''}
      key = {item.treatId}, {item.treatCourseId}
    </li>
  ));

  return (
    <div>
      {productsJ}
      <br />
      <br />
      {listMedicalTreats}
    </div>
  );
}

export default MedicalTreatmentList;
