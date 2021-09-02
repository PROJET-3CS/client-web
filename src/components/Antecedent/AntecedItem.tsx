/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FC } from 'react'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InputProps } from 'reactstrap'
import moment from 'moment'

interface Props extends InputProps {
 title: string
 content: string
 date: Date | string
}

const AntecedItem: FC<Props> = ({title, content, date, onClick, onKeyDown, color}) => {
 return (
  <div
   className="anteced__item"
   onClick={onClick}
   onKeyDown={onKeyDown}
   role="button"
   tabIndex={0}
  >
   <div className="anteced__item-icon">
    <FontAwesomeIcon color={color} icon={faFileAlt} />
   </div>
   <div className="anteced__item-content">
    <div>
     <span className="anteced__item-title">{title}</span>
     <span className="anteced__item-subtitle">
      {content}
     </span>
    </div>
    <span className="anteced__item-date">{moment(date).format('l')}</span>
   </div>
  </div>
 )
}

export default AntecedItem
