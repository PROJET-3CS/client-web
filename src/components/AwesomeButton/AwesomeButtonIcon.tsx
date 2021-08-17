import { ComponentProps, FC, InputHTMLAttributes } from 'react'
import './AwesomeButtonIcon.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Input } from 'reactstrap'

library.add(faCheck)

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon: ComponentProps<typeof Input>['icon']
    text: string
}
const AwesomeButtonIcon: FC<InputProps> = ({ icon, text }) => {
 return (
  <button type="submit" className="AwesomeButtonIcon">
   <FontAwesomeIcon icon={icon} className="AwesomeButtonIcon-icon" />
   <span>{text}</span>
  </button>
 )
}

export default AwesomeButtonIcon
