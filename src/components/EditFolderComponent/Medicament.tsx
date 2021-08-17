import { FC, useState } from 'react'
import { Button, Card, Col, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus)

const Medicament: FC = () => {
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
  <Card className="editfolder__medicalsection-card">
   <Col className="editfolder__medicalsection-col">
    <Row className="editfolder__medicalsection-row">
     <Button
      color="primary"
      className="editfolder__medicalsection-box"
      onClick={() => {
       onCheckboxBtnClick(1)
      }}
      active={cSelected.includes(1)}
     >
      Panadol 100g
     </Button>
     <Button
      className="editfolder__medicalsection-box"
      color="primary"
      onClick={() => {
       onCheckboxBtnClick(2)
      }}
      active={cSelected.includes(2)}
     >
      Luvoturox 50g
     </Button>
     <Button
      className="editfolder__medicalsection-box"
      color="primary"
      onClick={() => {
       onCheckboxBtnClick(3)
      }}
      active={cSelected.includes(3)}
     >
      Aspirin 500g
     </Button>
     <Button
      className="editfolder__medicalsection-box"
      color="primary"
      onClick={() => {
       onCheckboxBtnClick(4)
      }}
      active={cSelected.includes(4)}
     >
      Aspirin 500g
     </Button>
     <Button
      className="editfolder__medicalsection-box"
      color="primary"
      onClick={() => {
       onCheckboxBtnClick(5)
      }}
      active={cSelected.includes(5)}
     >
      Aspirin 500g
     </Button>
     <Button
      className="editfolder__medicalsection-box"
      color="primary"
      onClick={() => {
       onCheckboxBtnClick(6)
      }}
      active={cSelected.includes(6)}
     >
      Dafalgan 200g
     </Button>
     <Button
      className="editfolder__medicalsection-box"
      color="primary"
      onClick={() => {
       onCheckboxBtnClick(7)
      }}
      active={cSelected.includes(7)}
     >
      Dafalgan 200g
     </Button>
     <button type="submit" className="editfolder__medicalsection-button">
      <FontAwesomeIcon icon="plus" className="AwesomeButtonIcon-icon" />
      <span>Médicament</span>
     </button>
    </Row>
   </Col>
  </Card>
 )
}

export default Medicament
