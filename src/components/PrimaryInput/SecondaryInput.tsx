import React, { FC, ComponentProps } from 'react'
import { Input, Label } from 'reactstrap'
import './SecondaryInput.scss'

interface InputProps {
 type: ComponentProps<typeof Input>['type']
 name: ComponentProps<typeof Input>['name']
 placeholder: ComponentProps<typeof Input>['placeholder']
 label: ComponentProps<typeof Input>['label']
}

const SecondaryInput: FC<InputProps> = ({ name, placeholder, type, label }) => {
 return (
  <div className="Secondary__form-subgroup">
   <Label className="Secondary__form-subgroup--label">{label}</Label>
   <input
    className="Secondary__form-subgroup--input"
    type={type}
    name={name}
    placeholder={placeholder}
   />
  </div>
 )
}

export default SecondaryInput
