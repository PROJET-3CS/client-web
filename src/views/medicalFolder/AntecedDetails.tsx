import React, { FC, useState, useEffect } from 'react'
import { InputProps } from 'reactstrap'
import { faDotCircle, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ModalProps } from '../../helpers/types'

import AwesomeModal from '../../components/AwesomeModal/AwesomeModal'

interface Props {
 // eslint-disable-next-line no-unused-vars
 goBack: (type?: string | undefined) => void
 antecedType: string | undefined
}

const AntecedDetails: FC<ModalProps & Props & InputProps> = ({
 modal,
 toggle,
 goBack,
 onKeyDown,
 antecedType
}) => {
<<<<<<< HEAD
=======
 const initState = {
  title: '',
  cta: '',
 }
 const [state, setState] = useState(initState)
      
 const getContent = () => {
  switch (antecedType) {
  case 'affection':
   setState({
    ...state,
    title: 'Affections Congénitaire',
    cta: 'New Affection',
   })
   break
  
  case 'generale':
   setState({
    ...state,
    title: 'Maladies Générales',
    cta: 'New Maladie',
   })
   break
  case 'allergies':
   setState({
    ...state,
    title: 'Allergies aux médciament',
    cta: 'New Allergie',
   })
   break
  
  case 'intervention':
   setState({
    ...state,
    title: 'Interventions chirurgicales',
    cta: 'New Intervention',
   })
   break
  
  default:
   setState({
    ...state,
    title: 'Affections Congénitaire',
    cta: 'New Affection',
   })
   break
  }
 }
      
 useEffect(() => {
  getContent()
 }, [antecedType])

>>>>>>> 2f1af73e452ac9260ebfecb3072f8c8717f37cd3
 return (
  <AwesomeModal
   style={{ maxWidth: '40%' }}
   modal={modal}
   toggle={toggle}
   className="anteced__detail-modal"
  >
   <div className="clinity__modal-header">
    <div className="anteced__detail-header">
     <div className="anteced__detail-icon">
      <FontAwesomeIcon icon={faFileAlt} />
     </div>
     <div className="anteced__detail-content">
      <span className="anteced__detail-subtitle">Les Antécédents</span>
      <span className="anteced__detail-title">{state.title}</span>
     </div>
    </div>
   </div>
   <div className="anteced__detail-modal-body">
    <FontAwesomeIcon icon={faDotCircle} className="anteced__detail-section--icon" />
    <section className="clinity__modal-body">
     <div className="anteced__detail-section">
      <div className="anteced__detail-section-title">What’s this affection</div>
      <p className="anteced__detail-section-content">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla proin commodo.
      </p>
     </div>
    </section>

    <FontAwesomeIcon icon={faDotCircle} className="anteced__detail-section--icon" />
    <section className="clinity__modal-body">
     <div className="anteced__detail-section">
      <div className="anteced__detail-section-title">Details overview</div>
      <p className="anteced__detail-section-content">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sociis fames senectus diam imperdiet
       euismod nunc ornare feugiat integer. Molestie tincidunt cras facilisi nisi mauris faucibus
       mauris. Tincidunt duis semper tellus duis auctor. Sit velit id suspendisse et tempor. Amet,
       vel, odio est platea egestas nunc, risus sed.
      </p>
     </div>
    </section>
   </div>

   <div className="clinity__modal-footer anteced__detail-footer">
    <i
     onClick={() => {return goBack(antecedType)}}
     onKeyDown={onKeyDown}
     tabIndex={0}
     role="button"
     className="anteced__detail-footer-icon"
    >
     &#8592; Go back
    </i>
   </div>
  </AwesomeModal>
 )
}

export default AntecedDetails
