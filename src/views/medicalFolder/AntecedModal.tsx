import React, { FC } from 'react'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ModalProps } from '../../helpers/types'

import AntecedItem from '../../components/Antecedent/AntecedItem'
import AwesomeButtonIcon from '../../components/AwesomeButton/AwesomeButtonIcon'
import AwesomeModal from '../../components/AwesomeModal/AwesomeModal'

const AntecedModal: FC<ModalProps> = ({ modal, toggle, handler }) => {
 return (
  <AwesomeModal style={{ maxWidth: '45%' }} modal={modal} toggle={toggle}>
   <div className="clinity__modal-header">
    <h3>Affections Congénitaires</h3>
    <FontAwesomeIcon onClick={toggle} icon={faTimes} color="primary-color" />
   </div>
   <div className="clinity__modal-body">

    <AntecedItem
     title="Lorem ipsum dolor"
     content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Socii..."
     date="04/08/2021"
     onClick={handler}
    />

    <AntecedItem
     title="Lorem ipsum dolor"
     content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Socii..."
     date="04/08/2021"
     onClick={handler}
    />

    <AntecedItem
     title="Lorem ipsum dolor"
     content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Socii..."
     date="04/08/2021"
     onClick={handler}
    />

    <AntecedItem
     title="Lorem ipsum dolor"
     content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Socii..."
     date="04/08/2021"
     onClick={handler}
    />
   </div>

   <div className="clinity__modal-footer">
    <AwesomeButtonIcon
     style={{ width: '100%', marginLeft: '0' }}
     icon={faPlus}
     text="New Affection"
    />
   </div>
  </AwesomeModal>
 )
}

export default AntecedModal
