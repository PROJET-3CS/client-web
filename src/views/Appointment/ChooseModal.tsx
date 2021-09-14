import React, { FC, ReactEventHandler } from 'react'
import { faUser, faUsers, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal, ModalBody } from 'reactstrap'
import { InputProps } from '../../helpers/types'

interface Props extends InputProps {
 modal: boolean
 toggle: ReactEventHandler
 toggleOne: ReactEventHandler
 toggleTwo: ReactEventHandler
}

const ChooseModal: FC<Props> = ({ modal, toggle, toggleOne, toggleTwo }) => {
 return (
  <Modal
   isOpen={modal}
   modalTransition={{ timeout: 100 }}
   backdropTransition={{ timeout: 400 }}
   toggle={toggle}
   className="newappointment__select"
  >
   <ModalBody className="newappointment__select-body">
    <div className="newappointment__resultmodal-header">
     <p>Choose a category</p>
     <FontAwesomeIcon onClick={toggle} icon={faWindowClose} color="primary" />
    </div>
    <div className="newappointment__select-main">
     <button onClick={toggleOne} type="button" className="newappointment__select-box">
      <img className="newappointment__select-img1" src="/img/IndRDV.svg" alt="Idividual appointment illustration" />
      <span className="newappointment__select-title">RDV Individuel</span>
      <span className="newappointment__select-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
     </button>
     <button onClick={toggleOne} type="button" className="newappointment__select-box">
      <img className="newappointment__select-img2" src="/img/CollRDV.svg" alt="Collectif appointment illustration" />
      <span className="newappointment__select-title">RDV Collectif</span>
      <span className="newappointment__select-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
     </button>
    </div>
   </ModalBody>
  </Modal>
 )
}

export default ChooseModal
