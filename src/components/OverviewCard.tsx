import React, { FC } from 'react'
import { faLongArrowAltDown, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import CountUp from 'react-countup'

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
      <h2><CountUp end={cardInfo} duration={3} /></h2>
      <span className={cardGrowth ? 'cilinity-card__infos--up' : 'cilinity-card__infos--down'}>
       <FontAwesomeIcon
        style={{ marginRight: '.4rem' }}
        icon={cardGrowth ? faLongArrowAltUp : faLongArrowAltDown}
       />
       <CountUp end={cardGrowthValue} duration={2} />%
      </span>
     </div>
     <FontAwesomeIcon icon={cardIcon} className="cilinity-card__infos--icon" />
    </div>
   </div>
  </div>
 )
}

export default OverviewCard
