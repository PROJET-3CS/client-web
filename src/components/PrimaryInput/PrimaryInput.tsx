import React, { FC, ComponentProps } from 'react'
import { FormGroup, Input, Label } from 'reactstrap'
import './PrimaryInput.scss'

interface InputProps {
 type: ComponentProps<typeof Input>['type']
 name: ComponentProps<typeof Input>['name']
 placeholder: ComponentProps<typeof Input>['placeholder']
 label: ComponentProps<typeof Input>['label'],
 defaultValue?: ComponentProps<typeof Input>['value'] | undefined
}

const PrimaryInput: FC<InputProps> = ({ name, placeholder, type, label, defaultValue }) => {
 return (
  <FormGroup className="Primary__form-group">
   <Label className="Primary__form-label">{label}</Label>
   <Input name={name} placeholder={placeholder} type={type} defaultValue={defaultValue} className="Primary__form-input" />
  </FormGroup>
 )
}

export default PrimaryInput
