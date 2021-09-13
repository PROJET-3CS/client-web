import { FC, useState } from 'react'
import { Button, Col, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus)

interface Props {
 // eslint-disable-next-line no-unused-vars
 handleSelect: (value: string) => void
}

const Illnesses: FC<Props> = ({ handleSelect }) => {
 const [cSelected, setCSelected] = useState<number | undefined>()

 const onCheckboxBtnClick = (selected: number) => {
  setCSelected(selected)
 }

 return (
  <Col className="createExamination__IllnessDiagno-Illnesses--col">
   <Row className="createExamination__IllnessDiagno-Illnesses--row">
    <Button
     color="primary"
     className={`createExamination__IllnessDiagno-Illnesses--box ${
      cSelected === 1 ? 'createExamination__IllnessDiagno-Illnesses--box-active' : ''
     }`}
     onClick={() => {
      onCheckboxBtnClick(1)
      handleSelect('cardiovasculaire')
     }}
    >
     Cardiovasculaire
    </Button>
    <Button
     className={`createExamination__IllnessDiagno-Illnesses--box ${
      cSelected === 2 ? 'createExamination__IllnessDiagno-Illnesses--box-active' : ''
     }`}
     color="primary"
     onClick={() => {
      onCheckboxBtnClick(2)
      handleSelect('pulmonaire')
     }}
    >
     Pulmonaire
    </Button>
    <Button
     className={`createExamination__IllnessDiagno-Illnesses--box ${
      cSelected === 3 ? 'createExamination__IllnessDiagno-Illnesses--box-active' : ''
     }`}
     color="primary"
     onClick={() => {
      onCheckboxBtnClick(3)
      handleSelect('pulmonaire')
     }}
    >
     Abdomen
    </Button>
    <Button
     className={`createExamination__IllnessDiagno-Illnesses--box ${
      cSelected === 4 ? 'createExamination__IllnessDiagno-Illnesses--box-active' : ''
     }`}
     color="primary"
     onClick={() => {
      onCheckboxBtnClick(4)
      handleSelect('pulmonaire')
     }}
    >
     Neurologique
    </Button>
    <Button
     className={`createExamination__IllnessDiagno-Illnesses--box ${
      cSelected === 5 ? 'createExamination__IllnessDiagno-Illnesses--box-active' : ''
     }`}
     color="primary"
     onClick={() => {
      onCheckboxBtnClick(5)
      handleSelect('pulmonaire')
     }}
    >
     Ostéoarticulaire
    </Button>
    <Button
     className={`createExamination__IllnessDiagno-Illnesses--box ${
      cSelected === 6 ? 'createExamination__IllnessDiagno-Illnesses--box-active' : ''
     }`}
     color="primary"
     onClick={() => {
      onCheckboxBtnClick(6)
      handleSelect('pulmonaire')
     }}
    >
     Uronéphrologique
    </Button>
    <button type="submit" className="createExamination__IllnessDiagno-Illnesses--button">
     <FontAwesomeIcon icon="plus" className="AwesomeButtonIcon-icon" />
     <span>Illness</span>
    </button>
   </Row>
  </Col>
 )
}

export default Illnesses
