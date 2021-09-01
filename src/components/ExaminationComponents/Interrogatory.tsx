import { FC, useState } from 'react'
import { Button, InputProps, Row } from 'reactstrap'

const Interrogatory: FC<InputProps> = ({ btn1text, btn2text}) => {
 const [rSelected, setRSelected] = useState<number | undefined>()

 return (
  <Row md="2">
   <Button
    className="createExamination__IllnessDiagno-Interrogatory--box"
    color="primary"
    onClick={() => {
     setRSelected(1)
    }}
    active={rSelected === 1}
   >
    {btn1text}
   </Button>
   <Button
    className="createExamination__IllnessDiagno-Interrogatory--box"
    color="primary"
    onClick={() => {
     setRSelected(2)
    }}
    active={rSelected === 2}
   >
    {btn2text}
   </Button>
  </Row>
 )
}

export default Interrogatory
