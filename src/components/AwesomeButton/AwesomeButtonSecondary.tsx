import React, { FC } from 'react'
import './AwesomeButtonSecondary.scss'

const AwesomeButtonSecondary: FC = ({ children }) => {
  return (
    <button type="submit" className="pushable">
      <span className="shadow"> </span>
      <span className="edge"> </span>
      <span className="front">{children}</span>
    </button>
  )
}

export default AwesomeButtonSecondary
