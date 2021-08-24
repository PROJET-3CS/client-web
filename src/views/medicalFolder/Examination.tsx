import React, { FC } from 'react'

import { Table } from 'reactstrap'

const Examination: FC = () => {
 return (
  <div className="folder__item">
   <h3 className="folder__item-title">Examinations Medicales:</h3>
   <button type="button" className="folder__item-exam--btn">
    + New Examination
   </button>
   <div className="folder__item-exam--table">
    <Table borderless>
     <thead>
      <tr>
       <th>Médecin</th>
       <th>Date</th>
       <th>Duration</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>Nassim Amraoui</td>
       <td>25th October 2021</td>
       <td>3 mois</td>
      </tr>
      <tr>
       <td>Nassim Amraoui</td>
       <td>9th August 2019</td>
       <td>2 années</td>
      </tr>
     </tbody>
    </Table>
   </div>
  </div>
 )
}

export default Examination
