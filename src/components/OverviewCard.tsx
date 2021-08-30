import React, { FC } from 'react'
import { faLongArrowAltDown, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const OverviewCard: FC<{
 cardTitle: string
 cardInfo: number
 cardGrowth: boolean
 cardGrowthValue: number
 cardIcon: IconProp
}> = ({ cardTitle, cardInfo, cardGrowth, cardGrowthValue, cardIcon }) => {
 return (
  <div className="cilinity-card">
   <div className="cilinity-card__container">
    <h3 className="cilinity-card__header">{cardTitle} :</h3>
    <div className="cilinity-card__body">
     <div className="cilinity-card__infos">
      <h2>{cardInfo}</h2>
      <span className={cardGrowth ? 'cilinity-card__infos--up' : 'cilinity-card__infos--down'}>
       <FontAwesomeIcon
        style={{ marginRight: '.4rem' }}
        icon={cardGrowth ? faLongArrowAltUp : faLongArrowAltDown}
       />
       {cardGrowthValue}%
      </span>
     </div>
     <FontAwesomeIcon icon={cardIcon} className="cilinity-card__infos--icon" />
    </div>
   </div>
  </div>
 )
}

export default OverviewCard
