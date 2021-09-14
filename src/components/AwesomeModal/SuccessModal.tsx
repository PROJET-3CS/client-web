import React, { FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Modal, ModalBody, ModalProps } from 'reactstrap'

const SuccessModal: FC<ModalProps> = ({ modal }) => {
 const { id } = useParams<{ id: string }>()

 return (
  <div>
   <Modal
    isOpen={modal}
    modalTransition={{ timeout: 100 }}
    backdropTransition={{ timeout: 400 }}
    className="prescription__medications-successModal"
   >
    <ModalBody className="prescription__medications-successModal--body">
     <img
      className="prescription__medications-successModal--img"
      src="/img/successFolder.svg"
      alt="success"
     />
     <div className="prescription__medications-successModal--content">
      <span className="prescription__medications-successModal--mainTitle">
       Prescription created 🎉
      </span>
      <p className="prescription__medications-successModal--paragraph">
       The prescription have been succesfully created, Check it in examination.
      </p>
     </div>
     <Link to={`/examination/${id}/conclusion`} className="prescription__medications-successModal--action">
      Back to examination
     </Link>
    </ModalBody>
   </Modal>
  </div>
 )
}

export default SuccessModal
