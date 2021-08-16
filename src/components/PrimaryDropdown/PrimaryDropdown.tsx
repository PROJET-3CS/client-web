import { ComponentProps, FC, useState } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, Input, Label, FormGroup } from 'reactstrap'
import './PrimaryDropdown.scss'

interface InputProps {
 name: ComponentProps<typeof Input>['name']
 placeholder: ComponentProps<typeof Input>['placeholder']
 label: ComponentProps<typeof Input>['label']
}

const PrimaryDropdown2: FC<InputProps> = ({ name, placeholder, label, children }) => {
 const [dropdownOpen, setOpen] = useState(false)

 const toggle = () => {
  setOpen(!dropdownOpen)
 }

 return (
  <FormGroup className="PrimaryDropdown__form-group">
   <Label className="PrimaryDropdown__form-label">{label}</Label>
   <ButtonDropdown
    isOpen={dropdownOpen}
    toggle={toggle}
    name={name}
    className="PrimaryDropdown__form-input"
   >
    <DropdownToggle caret className="PrimaryDropdown__form-input--content">
     {placeholder}
    </DropdownToggle>
    <DropdownMenu>{children}</DropdownMenu>
   </ButtonDropdown>
  </FormGroup>
 )
}

export default PrimaryDropdown2
