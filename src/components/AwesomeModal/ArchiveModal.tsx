import React, { FC } from 'react'
import { Modal, ModalBody, ModalProps } from 'reactstrap'
import { User } from '../../helpers/types'

interface Props {
    handleArchive: () => void
    handleAnnuler: () => void
    user: User
}

const ArchiveModal: FC<ModalProps & Props> = ({ modal, toggle, handleArchive, handleAnnuler, user }) => {

 return (
  <div>
   <Modal
    isOpen={modal}
    modalTransition={{ timeout: 100 }}
    backdropTransition={{ timeout: 400 }}
    toggle={toggle}
    className="clinity__modal-accept"
   >
    <ModalBody className="clinity__modal-accept--body">
     <img className="clinity__modal-accept--imgDanger" src="/img/danger.svg" alt="reject" />
     <div className="clinity__modal-accept--content">
      <span className="clinity__modal-accept--mainTitle">Are you sure?</span>
      <p className="clinity__modal-accept--paragraph">
       Do you really want to archive <b>{`${user.firstname} ${user.lastname}`}</b> ? this process cannot be undone.
      </p>
     </div>
     <div className="clinity__modal-accept--action">
      <button
       type="button"
       className="clinity__modal-accept--btn clinity__modal-accept--btn-annuler"
       onClick={handleAnnuler}
      >
       Annuler
      </button>
      <button
       type="button"
       className="clinity__modal-accept--btn clinity__modal-accept--btn-reject"
       onClick={handleArchive}
      >
       Archive
      </button>
     </div>
    </ModalBody>
   </Modal>
  </div>
 )
}

export default ArchiveModal
