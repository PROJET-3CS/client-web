import { FC, useState } from 'react'
import { Button, InputProps, Row } from 'reactstrap'

interface Props {
    // eslint-disable-next-line no-unused-vars
    handleSelect: (value: string) => void
}

const Interrogatory: FC<Props & InputProps> = ({ btn1text, btn2text, handleSelect }) => {
 const [rSelected, setRSelected] = useState<number | undefined>(2)

 return (
  <Row md="2">
   <Button
    className={`createExamination__IllnessDiagno-Interrogatory--box ${rSelected === 1 ? 'createExamination__IllnessDiagno-Interrogatory--box-active' : ''}`}
    color="primary"
    onClick={() => {
     setRSelected(1)
     handleSelect('specific')
    }}
    active={rSelected === 1}
   >
    {btn1text}
   </Button>
   <Button
    className={`createExamination__IllnessDiagno-Interrogatory--box ${rSelected === 2 ? 'createExamination__IllnessDiagno-Interrogatory--box-active' : ''}`}
    color="primary"
    onClick={() => {
     setRSelected(2)
     handleSelect('general')
    }}
    active
   >
    {btn2text}
   </Button>
  </Row>
 )
}

export default Interrogatory
