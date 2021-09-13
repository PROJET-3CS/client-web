import React, { ChangeEventHandler, FC } from 'react'
import { InputProps, Label } from 'reactstrap'
import './SecondaryInput.scss'

interface Props {
 changeTextArea?: ChangeEventHandler<HTMLTextAreaElement> | undefined
}

const SecondaryInput: FC<InputProps & Props> = ({
 name,
 placeholder,
 type,
 label,
 id,
 min,
 max,
 onChange,
 changeTextArea,
 className,
 required
}) => {
 return (
  <div className={`Secondary__form-subgroup ${className}`}>
   <Label className="Secondary__form-subgroup--label">{label}</Label>
   {type === 'textarea' ? (
    <textarea
     id={id}
     className="Secondary__form-subgroup--input"
     name={name}
     placeholder={placeholder}
     rows={4}
     cols={50}
     onChange={changeTextArea}
     required={required}
    />
   ) : (
    <input
     id={id}
     min={min}
     max={max}
     className="Secondary__form-subgroup--input"
     type={type}
     name={name}
     placeholder={placeholder}
     onChange={onChange}
     required={required}
    />
   )}
  </div>
 )
}

export default SecondaryInput
