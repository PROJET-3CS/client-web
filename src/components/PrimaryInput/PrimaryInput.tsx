import React, { FC } from 'react'
import { FormGroup, Input, Label } from 'reactstrap'
import { InputProps } from '../../helpers/types'
import './PrimaryInput.scss'

<<<<<<< HEAD
interface InputProps {
 type: ComponentProps<typeof Input>['type']
 name: ComponentProps<typeof Input>['name']
 placeholder: ComponentProps<typeof Input>['placeholder']
 label: ComponentProps<typeof Input>['label']
}

const PrimaryInput: FC<InputProps> = ({ name, placeholder, type, label }) => {
  return (
    <FormGroup className="Primary__form-group">
      <Label className="Primary__form-label">{label}</Label>
      <Input name={name} placeholder={placeholder} type={type} className="Primary__form-input" />
    </FormGroup>
  )
=======
const PrimaryInput: FC<InputProps> = ({ id, name, placeholder, type, label, defaultValue, value = '', onChange, required = false }) => {
 return (
  <FormGroup className="Primary__form-group">
   <Label className="Primary__form-label">{label}</Label>
   <Input id={id} onChange={onChange} value={value} name={name} placeholder={placeholder} type={type} defaultValue={defaultValue} className="Primary__form-input" required={required} />
  </FormGroup>
 )
>>>>>>> 1a05ac864fd6def133a9848daf86e8d848d7a005
}

export default PrimaryInput
