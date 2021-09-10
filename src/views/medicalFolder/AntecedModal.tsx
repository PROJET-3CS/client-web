/* eslint-disable react/jsx-key */
import React, { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { getFolder } from '../../store/selectors'
import { ModalProps } from '../../helpers/types'

import AntecedItem from '../../components/Antecedent/AntecedItem'
import AwesomeButtonIcon from '../../components/AwesomeButton/AwesomeButtonIcon'
import AwesomeModal from '../../components/AwesomeModal/AwesomeModal'

interface Props {
 // eslint-disable-next-line no-unused-vars
 goForward: (type?: string) => void
 type: string | undefined
}

interface Antecedent {
 name: string
 description: string
 date: Date | string
 createdAt: Date | string
}

const AntecedModal: FC<ModalProps & Props> = ({ modal, toggle, handler, goForward, type }) => {
 // ===========================================================================
 // Selectors
 // ===========================================================================
 const { folder } = useSelector(getFolder)

 const initState = {
  title: '',
  cta: '',
  antecedents: [],
 }
 const [state, setState] = useState(initState)

 const getContent = () => {
  switch (type) {
   case 'affection':
    setState({
     ...state,
     antecedents: folder.generalIllnesses,
     title: 'Affections Congénitaire',
     cta: 'New Affection',
    })
    break

   case 'generale':
    setState({
     ...state,
     antecedents: folder.generalIllnesses,
     title: 'Maladies Générales',
     cta: 'New Maladie',
    })
    break
   case 'allergies':
    setState({
     ...state,
     antecedents: folder.allergicReactions,
     title: 'Allergies aux médciament',
     cta: 'New Allergie',
    })
    break

   case 'intervention':
    setState({
     ...state,
     antecedents: folder.surgicalInterventions,
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
    {state.antecedents.map((anteced: Antecedent) => {
     return (
      <AntecedItem
       title={anteced.name}
       content={anteced.description}
       date={moment(anteced.createdAt).format('l')}
       onClick={handler}
      />
     )
    })}
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
