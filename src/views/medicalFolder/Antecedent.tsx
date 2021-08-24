import React, { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

const Antecedent: FC = () => {
 return (
  <div className="folder__item">
   <h3 className="folder__item-title">Les Antécedents:</h3>

   <div className="folder__item-anteced--container">
    <div className="folder__item-anteced">
     <div className="folder__item-anteced--icon">
      <FontAwesomeIcon icon={faFileAlt} />
     </div>
     <div className="folder__item-anteced--content">
      <span className="folder__item-anteced--title">Affections Congénitaire</span>
      <span className="folder__item-anteced--date">12th February 2020</span>
     </div>
    </div>

    <div className="folder__item-anteced">
     <div className="folder__item-anteced--icon">
      <FontAwesomeIcon icon={faFileAlt} />
     </div>
     <div className="folder__item-anteced--content">
      <span className="folder__item-anteced--title">Maladies Générales</span>
      <span className="folder__item-anteced--date">12th February 2020</span>
     </div>
    </div>

    <div className="folder__item-anteced">
     <div className="folder__item-anteced--icon">
      <FontAwesomeIcon icon={faFileAlt} />
     </div>
     <div className="folder__item-anteced--content">
      <span className="folder__item-anteced--title">Allergies aux médciament</span>
      <span className="folder__item-anteced--date">12th February 2020</span>
     </div>
    </div>

    <div className="folder__item-anteced">
     <div className="folder__item-anteced--icon">
      <FontAwesomeIcon icon={faFileAlt} />
     </div>
     <div className="folder__item-anteced--content">
      <span className="folder__item-anteced--title">Interventions chirurgicales</span>
      <span className="folder__item-anteced--date">12th February 2020</span>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Antecedent
