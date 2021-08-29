import React, { FC, ReactEventHandler } from 'react'
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
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
    <h3 className="newappointment__select-header">Select By</h3>
    <div className="newappointment__select-main">
     <button onClick={toggleOne} type="button" className="newappointment__select-box">
      <i className="newappointment__select-icon">
       <FontAwesomeIcon icon={faUser} />
      </i>
      <span className="newappointment__select-text">Individual</span>
     </button>
     <button onClick={toggleTwo} type="button" className="newappointment__select-box">
      <i className="newappointment__select-icon">
       <FontAwesomeIcon icon={faUsers} />
      </i>
      <span className="newappointment__select-text">Collectif</span>
     </button>
    </div>
   </ModalBody>
  </Modal>
 )
}

export default ChooseModal
