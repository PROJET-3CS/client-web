import { ComponentProps, FC, useEffect, useState } from 'react'
import { Button, Input, Row } from 'reactstrap'
import { InputProps, TabacType } from '../../helpers/types'

interface Props {
 handleTabacChange: (type: string, value: boolean, nbr: number) => void
 btn1text: ComponentProps<typeof Input>['text1']
 btn2text: ComponentProps<typeof Input>['text2']
 inputname: ComponentProps<typeof Input>['inputname']
 titre1: ComponentProps<typeof Input>['titre1']
 titre2: ComponentProps<typeof Input>['titre2']
 tabac: TabacType
}

const TabacBoxes: FC<InputProps & Props> = ({
 btn1text,
 btn2text,
 inputname,
 titre1,
 titre2,
 handleTabacChange,
 tabac,
}) => {
 const [rSelected, setRSelected] = useState(tabac.value || false)
 const [nbr, setNbr] = useState(tabac.nbr || 0)

 useEffect(() => {
  handleTabacChange(inputname, rSelected, nbr)
 }, [rSelected])

 return (
  <Row md="5" className="editfolder__tabacsection-row">
   <span>{titre1}</span>
   <Button
    className={`editfolder__tabacsection-box ${
     rSelected === true ? 'editfolder__tabacsection-box--active' : ''
    }`}
    color="primary"
    onClick={() => {
     setRSelected(true)
    }}
    active={rSelected === true}
   >
    {btn1text}
   </Button>
   <Button
    className={`editfolder__tabacsection-box ${
     rSelected === false ? 'editfolder__tabacsection-box--active' : ''
    }`}
    color="primary"
    onClick={() => {
     setRSelected(false)
    }}
    active={rSelected === false}
   >
    {btn2text}
   </Button>
   <span>{titre2}</span>
   <Input
    name={inputname}
    placeholder="ex. 23"
    type="number"
    className="editfolder__tabacsection-input"
    value={nbr}
    onChange={(e) => {
     setNbr(Number(e.target.value))
    }}
   />
  </Row>
 )
}

export default TabacBoxes
