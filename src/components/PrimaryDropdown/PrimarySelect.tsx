import React, { FC } from 'react'
import { FormGroup, Label } from 'reactstrap'
import Select from 'react-select'

import { InputProps, OptionType } from '../../helpers/types'

interface SelectProps {
    getValue: (value: string) => void 
}

const PrimarySelect: FC<InputProps & SelectProps> = ({ id, name, label, options, defaultValue, getValue}) => {
 const formatOption = () => {
  if (defaultValue) {
   const option = options?.find((el) => {
    return el.value === defaultValue.toString()
   })

   return option
  }

  return null
 }

 const customStyles = {
  // eslint-disable-next-line
  control: (base: any) => {
   return {
    ...base,
    height: '5rem',
    minHeight: '5rem',
    fontSize: '1.5rem',
    fontWeight: '500',
    padding: '0.7rem 1rem !important',
   }
  },
 }

 return (
  <FormGroup className="Primary__form-group">
   <Label className="Primary__form-label">{label}</Label>
   <Select
    value={formatOption()}
    id={id}
    name={name}
    options={options}
    className="Primary__form-input--select"
    styles={customStyles}
    onChange={(selectedOption) => {
     if (Array.isArray(selectedOption)) {
      throw new Error('Unexpected type passed to ReactSelect onChange handler')
     }
     const {value} = selectedOption as OptionType

     getValue(value)
    }}
   />
  </FormGroup>
 )
}

export default PrimarySelect
