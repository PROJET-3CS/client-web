import React, { FC } from 'react'
import { Card, Input } from 'reactstrap'
import { InputProps } from '../../helpers/types'
import './PatientStateBox.scss'

const PatientStateBox: FC<InputProps> = ({ title, description }) => {
 return (
  <Card className="PatStateBox__card">
   <Input type="radio" name="radio1" className="PatStateBox__card-circle" />
   <div className="PatStateBox__card-content">
    <p>{title}</p>
    <span>{description}</span>
   </div>
  </Card>
 )
}

export default PatientStateBox
