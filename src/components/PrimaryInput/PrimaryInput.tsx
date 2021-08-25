import React, { FC } from 'react'
import { FormGroup, Input, Label } from 'reactstrap'
import { InputProps } from '../../helpers/types'
import './PrimaryInput.scss'

const PrimaryInput: FC<InputProps> = ({
 id,
 name,
 placeholder,
 type,
 label,
 defaultValue,
 value = '',
 onChange,
 required = false,
}) => {
 return (
  <FormGroup className="Primary__form-group">
   <Label className="Primary__form-label">{label}</Label>
   <Input
    id={id}
    onChange={onChange}
    value={value}
    name={name}
    placeholder={placeholder}
    type={type}
    defaultValue={defaultValue}
    className="Primary__form-input"
    required={required}
   />
  </FormGroup>
 )
}

export default PrimaryInput
