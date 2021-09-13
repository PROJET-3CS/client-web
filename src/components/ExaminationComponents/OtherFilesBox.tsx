import React, { FC } from 'react'
import { Button, Card } from 'reactstrap'
import { InputProps } from '../../helpers/types'
import './OtherFilesBox.scss'

const OtherFilesBox: FC<InputProps> = ({ title, description, image }) => {
 return (
  <Card className="OtherFilesBox__card">
   <div className="OtherFilesBox__card-body">
    <div className="OtherFilesBox__card-icon">
     <img src={image} alt="" />
    </div>
    <div className="OtherFilesBox__card-title">
     <p>{title}</p>
     <span>{description}</span>
    </div>
   </div>
   <div className="OtherFilesBox__card-action">
    <Button className="OtherFilesBox__card-button">import</Button>
    <Button className="OtherFilesBox__card-button">new one</Button>
   </div>
  </Card>
 )
}

export default OtherFilesBox
