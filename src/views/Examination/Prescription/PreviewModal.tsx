import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Modal, ModalBody, ModalProps } from 'reactstrap'
import { Medicament } from '../../../helpers/types'
import { getAuth, getFolder } from '../../../store/selectors'
import PrescriptionOverview from './PrescriptionOverview'

interface Props {
 medications: Medicament[]
}

const PreviewModal: FC<ModalProps & Props> = ({ modal, toggle, medications }) => {
 // ===========================================================================
 // Selectors
 // ===========================================================================

 const { patient } = useSelector(getFolder)
 const { user } = useSelector(getAuth)
 
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
     <PrescriptionOverview medications={medications} patient={patient} medecin={user} />
    </ModalBody>
   </Modal>
  </div>
 )
}

export default PreviewModal
