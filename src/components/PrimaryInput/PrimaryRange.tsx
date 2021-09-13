import React, { FC } from 'react'
import { FormGroup, Input, InputProps, Label } from 'reactstrap'
import { getVPS } from '../../helpers/api'
import './PrimaryInput.scss'

interface Props {
 range: number[]
}
const PrimaryInput: FC<Props & InputProps> = ({
 id,
 name,
 placeholder,
 type,
 label,
 defaultValue,
 value = 0,
 step,
 min,
 max,
 range,
 onChange,
 required = false,
}) => {
 return (
  <FormGroup className="Primary__form-group">
   <Label className="Primary__form-label">{`${label}: ${value} (${getVPS(Number(value))})`}</Label>
   <Input
    id={id}
    onChange={onChange}
    value={value}
    name={name}
    placeholder={placeholder}
    type={type}
    step={step}
    min={min}
    max={max}
    defaultValue={defaultValue}
    className="Primary__form-input"
    required={required}
   />
   <datalist id="level">
    {range.map((el) => {
     return <option key={el}>{el}</option>
    })}
   </datalist>
  </FormGroup>
 )
}

export default PrimaryInput
