/* eslint-disable max-lines */
import { FC } from 'react'
import { InputProps, Modal, ModalBody } from 'reactstrap'
import { ModalProps } from '../../helpers/types'

const AwesomeModal: FC<ModalProps & InputProps> = ({ children, modal, toggle, style }) => {

 return (
  <>
   <Modal
    isOpen={modal}
    modalTransition={{ timeout: 100 }}
    backdropTransition={{ timeout: 400 }}
    toggle={toggle}
    className="newappointment__resultmodal"
    style={style}
   >
    <ModalBody className="newappointment__resultmodal-body">
     {children}
    </ModalBody>
   </Modal>
  </>
 )
}

export default AwesomeModal
