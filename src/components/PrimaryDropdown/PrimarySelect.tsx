import React, { ComponentProps, FC } from 'react'
import { FormGroup, Label, Input } from 'reactstrap'
import Select from 'react-select'

import { OptionType } from '../../helpers/types'

interface InputProps {
 id?: ComponentProps<typeof Input>['id']
 name?: ComponentProps<typeof Input>['name']
 placeholder?: ComponentProps<typeof Input>['placeholder']
 label?: ComponentProps<typeof Input>['label']
 options: OptionType[]
 defaultOption?: string | undefined
}

const PrimarySelect: FC<InputProps> = ({ id, name, label, options }) => {
 //  const formatOption = () => {
 //   if (defaultOption) {
 //    return options.find((el) => {
 //     return el.value === defaultOption
 //    })
 //   }
 //   return null
 //  }

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
    id={id}
    name={name}
    options={options}
    className="Primary__form-input--select"
    styles={customStyles}
   />
  </FormGroup>
 )
}

export default PrimarySelect
