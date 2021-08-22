import React, { FC } from 'react'
import { faLongArrowAltDown, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const OverviewCard: FC<{
 cardTitle: string
 cardInfo: number
 cardGrowth: boolean
 cardGrowthValue: number
 cardIcon: any
}> = ({ cardTitle, cardInfo, cardGrowth, cardGrowthValue, cardIcon }) => {
 return (
  <div className="card">
   <div className="card__container">
    <h3 className="card__header">{cardTitle} :</h3>
    <div className="card__body">
     <div className="card__infos">
      <h2>
       {cardInfo}
       <br />
       <span className={cardGrowth ? 'card__infos--up' : 'card__infos--down'}>
        <FontAwesomeIcon
         style={{ marginRight: '.4rem' }}
         icon={cardGrowth ? faLongArrowAltUp : faLongArrowAltDown}
        />
        {cardGrowthValue}%
       </span>
      </h2>
     </div>
     <FontAwesomeIcon icon={cardIcon} className="card__infos--icon" />
    </div>
   </div>
  </div>
 )
}

export default OverviewCard
