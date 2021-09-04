import React, { FC } from 'react'
import { InputProps } from 'reactstrap'
import { faDotCircle, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ModalProps } from '../../helpers/types'

import AwesomeModal from '../../components/AwesomeModal/AwesomeModal'

interface Props {
 goBack: () => void
}

const AntecedDetails: FC<ModalProps & Props & InputProps> = ({
 modal,
 toggle,
 goBack,
 onKeyDown,
}) => {
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
      <span className="anteced__detail-title">Affections Congénitaire</span>
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
     onClick={goBack}
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
