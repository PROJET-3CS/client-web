import React, { FC, useState } from 'react'
import ManagementModal from './ManagementModal'


const Filter: FC = () => {
 const [modal, setModal] = useState(false)
 //  const [name, setName] = useState('')
 //  const [date, setDatefilter] = useState('')
 //  const [ville, setville] = useState('')
 //  const [gender, setGender] = useState('')
 //  const [year, setYear] = useState('')
 //  const [blood, setBlood] = useState('')
 //  const [height, setheight] = useState('')
 //  const [wieght, setWeight] = useState('')
 //  const [medication, setMedication] = useState('')
 //  const [allergie, setAllergie] = useState('')
 //  const [illness, setIllness] = useState('')


 const handleModale = () => {
  setModal(true)
 }

 return (
  <div className="clinity__filter">
   <button type='button' onClick={handleModale}>Filters</button>
   <ManagementModal modal={modal} setModal={setModal} />
  </div>
 )
}

export default Filter
