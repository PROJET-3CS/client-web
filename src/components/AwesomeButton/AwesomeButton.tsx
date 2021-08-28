import React, { FC } from 'react'
import { InputProps } from '../../helpers/types'
import './AwesomeButton.scss'

const AwesomeButton: FC<InputProps> = ({ children, className, onClick }) => {
 return (
  <button type="submit" onClick={onClick} className={`pushable-primary ${className}`}>
   <span className="shadow-primary"> </span>
   <span className="edge-primary"> </span>
   <span className="front-primary">{children}</span>
  </button>
 )
}

export default AwesomeButton
