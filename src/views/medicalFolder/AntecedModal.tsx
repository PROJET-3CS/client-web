import React, { FC, useEffect, useState } from 'react'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ModalProps } from '../../helpers/types'

import AntecedItem from '../../components/Antecedent/AntecedItem'
import AwesomeButtonIcon from '../../components/AwesomeButton/AwesomeButtonIcon'
import AwesomeModal from '../../components/AwesomeModal/AwesomeModal'

interface Props {
 // eslint-disable-next-line no-unused-vars
 goForward: (type?: string) => void
 type: string | undefined
}

const AntecedModal: FC<ModalProps & Props> = ({ modal, toggle, handler, goForward, type }) => {
 const initState = {
  title: '',
  cta: '',
 }
 const [state, setState] = useState(initState)

 const getContent = () => {
  switch (type) {
  case 'affection':
   setState({
    ...state,
    title: 'Affections Congénitaire',
    cta: 'New Affection',
   })
   break

  case 'generale':
   setState({
    ...state,
    title: 'Maladies Générales',
    cta: 'New Maladie',
   })
   break
  case 'allergies':
   setState({
    ...state,
    title: 'Allergies aux médciament',
    cta: 'New Allergie',
   })
   break

  case 'intervention':
   setState({
    ...state,
    title: 'Interventions chirurgicales',
    cta: 'New Intervention',
   })
   break

  default:
   setState({
    ...state,
    title: 'Affections Congénitaire',
    cta: 'New Affection',
   })
   break
  }
 }

 useEffect(() => {
  getContent()
 }, [type])

 return (
  <AwesomeModal style={{ maxWidth: '45%' }} modal={modal} toggle={toggle}>
   <div className="clinity__modal-header">
    <h3>{state.title}</h3>
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
     text={state.cta}
     onClick={() => {
      return goForward(type)
     }}
    />
   </div>
  </AwesomeModal>
 )
}

export default AntecedModal
