import React, { FC } from 'react'
import { Card, FormGroup, Label } from 'reactstrap'
import { InputProps } from '../../helpers/types'
import './FileUpload.scss'

const FileUpload: FC<InputProps> = ({ label }) => {
 return (
  <FormGroup className="FileUpload__form-group">
   <Label className="FileUpload__form-label">{label}</Label>
   <Card className="FileUpload__form-card">
    <img src="/img/upload_file.svg" alt="Upload File" />
    <p>Drop your image here, or browse</p>
    <span>PNG, GIF, JPG or JPEG file type</span>
   </Card>
  </FormGroup>
 )
}

export default FileUpload
