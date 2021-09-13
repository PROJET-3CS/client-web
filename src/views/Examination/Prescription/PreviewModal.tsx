import { FC } from 'react'
import { Modal, ModalBody, ModalProps } from 'reactstrap'
import PrescriptionOverview from './PrescriptionOverview'

const PreviewModal: FC<ModalProps> = ({ modal, toggle }) => {
 //  ==============================================================================
 //  State
 //  ==============================================================================

 // ===========================================================================
 // Handlers
 // ===========================================================================

 // ===========================================================================
 // Hooks
 // ===========================================================================

 return (
  <div>
   <Modal
    isOpen={modal}
    modalTransition={{ timeout: 100 }}
    backdropTransition={{ timeout: 400 }}
    toggle={toggle}
    className="prescription__medications-modal"
   >
    <ModalBody className="prescription__medications-modal--body">
     <PrescriptionOverview />
    </ModalBody>
   </Modal>
  </div>
 )
}

export default PreviewModal
