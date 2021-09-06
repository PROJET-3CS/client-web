import React, { FC } from 'react'

const Medications: FC = () => {
 const srcpic = '/img/medication.png'
 const med = [0, 1, 2, 3]

 return (
  <div>
   <h3 className="prescription__item-title">medications:</h3>
   {med.map((medication) => {
    return (
     <div className="prescription__medications-element" key={medication}>
      <div className="prescription__medications-details">
       <div className="prescription__medications-pic">
        <img src={srcpic} alt="medication" />
       </div>
       <div className="prescription__medications-detailstext">
        <p className="prescription__medications-detailsname">medication namle le340</p>
        <p className="prescription__medications-detailsdose">Dosage :1 comprime / jour</p>
       </div>
       <div className="prescription__medications-detailstextl">
        <p>08/04/2021</p>
        <p>QSP : 3 mois</p>
       </div>
      </div>
     </div>
    )
   })}
  </div>
 )
}

export default Medications
