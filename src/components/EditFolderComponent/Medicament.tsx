import { FC, useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { ReactChangeEvent, ReactSubmitEvent } from '../../helpers/types'
import AddModal from './AddModal'
import MedicamentBox from './MedicamentBox'

library.add(faPlus)

interface Props {
 medicaments: string[]
 handleMedicamentChange: (payload: string[]) => void
}

const Medicament: FC<Props> = ({ medicaments, handleMedicamentChange }) => {
 //  ==============================================================================
 //  State
 //  ==============================================================================

 const initMedicament = {
  name: '',
  dose: 0,
  unit: '',
 }
 const [medicament, setMedicament] = useState(initMedicament)

 const [modal, setModal] = useState(false)

 // ===========================================================================
 // Handlers
 // ===========================================================================

 const toggle = () => {
  setMedicament(initMedicament)

  return setModal(!modal)
 }

 const handleChange = (e: ReactChangeEvent) => {
  setMedicament({
   ...medicament,
   [e.target.id]: e.target.value,
  })
 }

 const handleSubmitMedicament = (e: ReactSubmitEvent) => {
  e.preventDefault()
  const medArr = [...medicaments]
  medArr.push(`${medicament.name} ${medicament.dose}${medicament.unit}`)
  handleMedicamentChange(medArr)
  toggle()
 }

 const handleRemoveMedicament = (payload: string) => {
  const medArr: string[] = []
  medicaments.forEach((med) => {
   if (med !== payload) medArr.push(med)
  })
  handleMedicamentChange(medArr)
 }

 return (
  <Card className="editfolder__medicalsection-card">
   <Col className="editfolder__medicalsection-col">
    <Row className="editfolder__medicalsection-row">
     {medicaments.map((box) => {
      return <MedicamentBox key={box} box={box} handleRemoveMedicament={handleRemoveMedicament} />
     })}

     <button onClick={toggle} type="submit" className="editfolder__medicalsection-button">
      <FontAwesomeIcon icon="plus" className="AwesomeButtonIcon-icon" />
      <span>Médicament</span>
     </button>
    </Row>
   </Col>

   <AddModal
    modal={modal}
    toggle={toggle}
    handleSubmitMedicament={handleSubmitMedicament}
    medicament={medicament}
    handleChange={handleChange}
   />
  </Card>
 )
}

export default Medicament
