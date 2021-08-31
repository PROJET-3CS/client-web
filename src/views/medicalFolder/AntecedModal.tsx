import { faFileAlt, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import AwesomeButtonIcon from '../../components/AwesomeButton/AwesomeButtonIcon'
import AwesomeModal from '../../components/AwesomeModal/AwesomeModal'
import { ModalProps } from '../../helpers/types'

const AntecedModal: FC<ModalProps> = ({ modal, toggle }) => {
 return (
  <AwesomeModal style={{ maxWidth: '45%' }} modal={modal} toggle={toggle}>
   <div className="clinity__modal-header">
    <h3>Affections Congénitaires</h3>
    <FontAwesomeIcon onClick={toggle} icon={faTimes} color="primary-color" />
   </div>
   <div className="clinity__modal-body">
    <div className="anteced__item">
     <div className="anteced__item-icon">
      <FontAwesomeIcon icon={faFileAlt} />
     </div>
     <div className="anteced__item-content">
      <div>
       <span className="anteced__item-title">Lorem ipsum dolor</span>
       <span className="anteced__item-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Socii...
       </span>
      </div>
      <span className="anteced__item-date">04/08/2021</span>
     </div>
    </div>

    <div className="anteced__item">
     <div className="anteced__item-icon">
      <FontAwesomeIcon icon={faFileAlt} />
     </div>
     <div className="anteced__item-content">
      <div>
       <span className="anteced__item-title">Lorem ipsum dolor</span>
       <span className="anteced__item-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Socii...
       </span>
      </div>
      <span className="anteced__item-date">04/08/2021</span>
     </div>
    </div>

    <div className="anteced__item">
     <div className="anteced__item-icon">
      <FontAwesomeIcon icon={faFileAlt} />
     </div>
     <div className="anteced__item-content">
      <div>
       <span className="anteced__item-title">Lorem ipsum dolor</span>
       <span className="anteced__item-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Socii...
       </span>
      </div>
      <span className="anteced__item-date">04/08/2021</span>
     </div>
    </div>

    <div className="anteced__item">
     <div className="anteced__item-icon">
      <FontAwesomeIcon icon={faFileAlt} />
     </div>
     <div className="anteced__item-content">
      <div>
       <span className="anteced__item-title">Lorem ipsum dolor</span>
       <span className="anteced__item-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Socii...
       </span>
      </div>
      <span className="anteced__item-date">04/08/2021</span>
     </div>
    </div>
   </div>

   <div className="clinity__modal-footer">
    <AwesomeButtonIcon style={{width:'100%', marginLeft: '0'}} icon={faPlus} text="New Affection" />
   </div>
  </AwesomeModal>
 )
}

export default AntecedModal
