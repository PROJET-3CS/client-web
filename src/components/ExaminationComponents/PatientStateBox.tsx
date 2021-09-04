import React, { FC } from 'react'
import { Card, Col, Row } from 'reactstrap'
import { InputProps } from '../../helpers/types'
import './PatientStateBox.scss'

const PatientStateBox: FC<InputProps> = ({ title, description }) => {
 return (
  <Card className="PatStateBox__card">
   <Col>
    <Row md="2">
     <Card className="PatStateBox__card-circle" />
     <div className="PatStateBox__card-content">
      <p>{title}</p>
      <span>{description}</span>
     </div>
    </Row>
   </Col>
  </Card>
 )
}

export default PatientStateBox
