import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Modal, ModalBody, ModalProps } from 'reactstrap'

interface Props {
 title: string
 text: string
 imgPath: string
 actionTxt: string
 actionPath: string
}

const SuccessModal: FC<ModalProps & Props> = ({ modal, title, text, imgPath, actionTxt, actionPath }) => {

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
      src={imgPath}
      alt="success"
     />
     <div className="prescription__medications-successModal--content">
      <span className="prescription__medications-successModal--mainTitle">
       {title} 🎉
      </span>
      <p className="prescription__medications-successModal--paragraph">
       {text}
      </p>
     </div>
     <Link
      to={actionPath}
      className="prescription__medications-successModal--action"
     >
      {actionTxt}
     </Link>
    </ModalBody>
   </Modal>
  </div>
 )
}

export default SuccessModal
