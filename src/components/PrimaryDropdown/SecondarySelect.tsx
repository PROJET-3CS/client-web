import React, { FC } from 'react'
import Select from 'react-select'

import { InputProps, OptionType } from '../../helpers/types'
import './SecondarySelect.scss'

interface SelectProps {
 // eslint-disable-next-line no-unused-vars
 getValue: (value: string) => void
}

const SecondarySelect: FC<InputProps & SelectProps> = ({
 id,
 name,
 options,
 defaultValue,
 getValue,
 placeholder = 'Select...',
}) => {
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
    height: '4.5rem',
    fontSize: '1.3rem',
    fontWeight: '500',
   }
  },
 }

 return (
  <Select
   value={formatOption()}
   id={id}
   name={name}
   options={options}
   className="secondary__form-input--select"
   styles={customStyles}
   placeholder={placeholder}
   onChange={(selectedOption) => {
    if (Array.isArray(selectedOption)) {
     throw new Error('Unexpected type passed to ReactSelect onChange handler')
    }
    const { value } = selectedOption as OptionType

    getValue(value)
   }}
  />
 )
}

export default SecondarySelect
