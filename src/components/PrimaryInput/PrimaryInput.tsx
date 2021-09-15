import React, { FC } from 'react'
import { FormFeedback, FormGroup, Input, InputProps, Label } from 'reactstrap'
import './PrimaryInput.scss'

interface Props {
    errText?: string
}

const PrimaryInput: FC<InputProps & Props> = ({
 id,
 name,
 placeholder,
 type,
 label,
 defaultValue,
 value = '',
 min,
 max,
 step,
 onChange,
 required = false,
 invalid,
 errText
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
    min={min}
    max={max}
    step={step}
    defaultValue={defaultValue}
    className="Primary__form-input"
    required={required}
    invalid={invalid}
   />
   <FormFeedback>{errText}</FormFeedback>
  </FormGroup>
 )
}

export default PrimaryInput
