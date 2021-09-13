import { ComponentProps, FC } from 'react'
import './AwesomeButtonIcon.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Input } from 'reactstrap'
import { InputProps } from '../../helpers/types'

library.add(faCheck)

interface Props extends InputProps {
 icon: ComponentProps<typeof Input>['icon']
 text: string
 disabled?: boolean
}
const AwesomeButtonIcon: FC<Props> = ({ icon, text, onClick, style, disabled }) => {

 return (
  <button
   onClick={onClick}
   type="submit"
   className={`AwesomeButtonIcon ${disabled ? 'AwesomeButtonIcon-disabled' : ''}`}
   style={style}
   disabled={disabled}
  >
   <FontAwesomeIcon icon={icon} className="AwesomeButtonIcon-icon" />
   <span>{text}</span>
  </button>
 )
}

export default AwesomeButtonIcon
