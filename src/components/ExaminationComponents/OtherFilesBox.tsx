import React, { FC } from 'react'
import { Button, Card, Col, Row } from 'reactstrap'
import { InputProps } from '../../helpers/types'
import './OtherFilesBox.scss'

const OtherFilesBox: FC<InputProps> = ({ title, description, image }) => {
 return (
  <Card className="OtherFilesBox__card">
   <Col className="OtherFilesBox__card-col">
    <Row md="4" className="OtherFilesBox__card-row">
     <div className="OtherFilesBox__card-icon">
      <img src={image} alt="" />
     </div>
     <div className="OtherFilesBox__card-title">
      <p>{title}</p>
      <span>{description}</span>
     </div>
     <Button className="OtherFilesBox__card-button">import</Button>
     <Button className="OtherFilesBox__card-button">new one</Button>
    </Row>
   </Col>
  </Card>
 )
}

export default OtherFilesBox
