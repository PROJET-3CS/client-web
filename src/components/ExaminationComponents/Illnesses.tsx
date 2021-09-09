import { FC, useState } from 'react'
import { Button, Col, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus)

const Illnesses: FC = () => {
 const [cSelected, setCSelected] = useState<number[]>([])

 const onCheckboxBtnClick = (selected: number) => {
  const index = cSelected.indexOf(selected)
  if (index < 0) {
   cSelected.push(selected)
  } else {
   cSelected.splice(index, 1)
  }
  setCSelected([...cSelected])
 }

 return (
  <Col className="createExamination__IllnessDiagno-Illnesses--col">
   <Row className="createExamination__IllnessDiagno-Illnesses--row">
    <Button
     color="primary"
     className="createExamination__IllnessDiagno-Illnesses--box"
     onClick={() => {
      onCheckboxBtnClick(1)
     }}
     active={cSelected.includes(1)}
    >
     O.R.L
    </Button>
    <Button
     className="createExamination__IllnessDiagno-Illnesses--box"
     color="primary"
     onClick={() => {
      onCheckboxBtnClick(2)
     }}
     active={cSelected.includes(2)}
    >
     Encodrinology
    </Button>
    <Button
     className="createExamination__IllnessDiagno-Illnesses--box"
     color="primary"
     onClick={() => {
      onCheckboxBtnClick(3)
     }}
     active={cSelected.includes(3)}
    >
     Digestif
    </Button>
    <Button
     className="createExamination__IllnessDiagno-Illnesses--box"
     color="primary"
     onClick={() => {
      onCheckboxBtnClick(4)
     }}
     active={cSelected.includes(4)}
    >
     Génito-Urinaire
    </Button>
    <Button
     className="createExamination__IllnessDiagno-Illnesses--box"
     color="primary"
     onClick={() => {
      onCheckboxBtnClick(5)
     }}
     active={cSelected.includes(5)}
    >
     Respiratoire
    </Button>
    <Button
     className="createExamination__IllnessDiagno-Illnesses--box"
     color="primary"
     onClick={() => {
      onCheckboxBtnClick(6)
     }}
     active={cSelected.includes(6)}
    >
     Locomoteur
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
