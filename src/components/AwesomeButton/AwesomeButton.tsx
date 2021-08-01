import React, { FC } from 'react'
import './AwesomeButton.scss'

const AwesomeButton: FC = ({children}) => {
 return (
  <button type="submit" className="pushable-primary">
   <span className="shadow-primary"> </span>
   <span className="edge-primary"> </span>
   <span className="front-primary">{children}</span>
  </button>
 )
}

export default AwesomeButton
