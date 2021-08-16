import { ComponentProps, FC, useState } from 'react'
import { Button, Input, Row } from 'reactstrap'

interface InputProps {
 btn1text: ComponentProps<typeof Input>['text1']
 btn2text: ComponentProps<typeof Input>['text2']
 inputname: ComponentProps<typeof Input>['inputname']
 titre1: ComponentProps<typeof Input>['titre1']
 titre2: ComponentProps<typeof Input>['titre2']
}

const TabacBoxes: FC<InputProps> = ({ btn1text, btn2text, inputname, titre1, titre2 }) => {
 const [rSelected, setRSelected] = useState<number | undefined>()

 return (
  <Row md="5" className="editfolder__tabacsection-row">
   <span>{titre1}</span>
   <Button
    className="editfolder__tabacsection-box"
    color="primary"
    onClick={() => {
     setRSelected(1)
    }}
    active={rSelected === 1}
   >
    {btn1text}
   </Button>
   <Button
    className="editfolder__tabacsection-box"
    color="primary"
    onClick={() => {
     setRSelected(2)
    }}
    active={rSelected === 2}
   >
    {btn2text}
   </Button>
   <span>{titre2}</span>
   <Input
    name={inputname}
    placeholder="ex. 23"
    type="number"
    className="editfolder__tabacsection-input"
   />
  </Row>
 )
}

export default TabacBoxes
