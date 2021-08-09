import React, { FC, InputHTMLAttributes } from 'react'
import { FormGroup, Input, Label } from 'reactstrap'
import './PrimaryInput.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    placeholder:string;
    type:string;
    label:string;
}

const PrimaryInput: FC<InputProps> = ({name, placeholder, type,label}) => {
 return (
  <FormGroup className="Primary__form-group">
   <Label className="Primary__form-label">{label}</Label>
   <Input name={name} placeholder={placeholder} type={type} className="Primary__form-input"/>
  </FormGroup>
 )
}

export default PrimaryInput
