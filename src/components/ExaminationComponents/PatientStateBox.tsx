import React, { FC } from 'react'
import { Card, Input } from 'reactstrap'
import { InputProps } from '../../helpers/types'
import './PatientStateBox.scss'

interface Props {
 // eslint-disable-next-line no-unused-vars
 onSelect: (value: string) => void
 payload: string
}

const PatientStateBox: FC<Props & InputProps> = ({
 title,
 description,
 value,
 payload,
 onSelect,
}) => {
 return (
  <Card className="PatStateBox__card">
   <Input
    type="radio"
    name="radio1"
    className="PatStateBox__card-circle"
    onChange={() => {
     return onSelect(payload)
    }}
    checked={value === payload}
   />
   <div className="PatStateBox__card-content">
    <p>{title}</p>
    <span>{description}</span>
   </div>
  </Card>
 )
}

export default PatientStateBox
