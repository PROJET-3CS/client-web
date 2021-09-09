import React, { FC, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import AntecedModal from './AntecedModal'
import AntecedDetails from './AntecedDetails'
import AddAnteced from './AddAnteced'
import { AntecedentDetail } from '../../../helpers/types'

interface detailProps {
    open: boolean
    anteced: AntecedentDetail | undefined
}

const Antecedent: FC = () => {
 //  ==============================================================================
 //  State
 //  ==============================================================================
 const initState: { type: string | undefined; path: string | undefined } = {
  type: '',
  path: '',
 }

 const detailState = {
  open: false,
  anteced: undefined,
 }
 const [state, setState] = useState(initState)

 const [open, setOpen] = useState(false)
 const [detail, setDetail] = useState<detailProps>(detailState)

 const [addModal, setAddModal] = useState(false)

 // ===========================================================================
 // Handlers
 // ===========================================================================

 const toggle = (type?: string, path?: string) => {
  setDetail({
   ...detail,
   open: false,
  })
  setAddModal(false)
  setState({
   type,
   path,
  })
  setOpen(!open)
 }

 const toggleDetail = (anteced?: AntecedentDetail) => {
  setOpen(false)
  setDetail({
   ...detail,
   open: !detail.open,
   anteced,
  })
 }

 const toggleAdd = (type?: string) => {
  toggle(type)
  setAddModal(!addModal)
 }

 return (
  <div className="folder__item">
   <h3 className="folder__item-title">Les Antécedents:</h3>

   <div className="folder__item-anteced--container">
    <button
     type="button"
     className="folder__item-anteced"
     onClick={() => {
      return toggle('affection')
     }}
    >
     <div className="folder__item-anteced--icon">
      <FontAwesomeIcon icon={faFileAlt} />
     </div>
     <div className="folder__item-anteced--content">
      <span className="folder__item-anteced--title">Affections Congénitaire</span>
      <span className="folder__item-anteced--date">12th February 2020</span>
     </div>
    </button>

    <button
     type="button"
     className="folder__item-anteced"
     onClick={() => {
      return toggle('generale')
     }}
    >
     <div className="folder__item-anteced--icon">
      <FontAwesomeIcon icon={faFileAlt} />
     </div>
     <div className="folder__item-anteced--content">
      <span className="folder__item-anteced--title">Maladies Générales</span>
      <span className="folder__item-anteced--date">12th February 2020</span>
     </div>
    </button>

    <button
     type="button"
     className="folder__item-anteced"
     onClick={() => {
      return toggle('allergies')
     }}
    >
     <div className="folder__item-anteced--icon">
      <FontAwesomeIcon icon={faFileAlt} />
     </div>
     <div className="folder__item-anteced--content">
      <span className="folder__item-anteced--title">Allergies aux médciament</span>
      <span className="folder__item-anteced--date">12th February 2020</span>
     </div>
    </button>

    <button
     type="button"
     className="folder__item-anteced"
     onClick={() => {
      return toggle('intervention')
     }}
    >
     <div className="folder__item-anteced--icon">
      <FontAwesomeIcon icon={faFileAlt} />
     </div>
     <div className="folder__item-anteced--content">
      <span className="folder__item-anteced--title">Interventions chirurgicales</span>
      <span className="folder__item-anteced--date">12th February 2020</span>
     </div>
    </button>
   </div>

   <AntecedModal
    modal={open}
    toggle={toggle}
    handler={toggleDetail}
    goForward={toggleAdd}
    type={state.type}
   />
   <AntecedDetails
    modal={detail.open}
    toggle={toggleDetail}
    goBack={toggle}
    antecedType={state.type}
    details={detail.anteced}
   />
   <AddAnteced modal={addModal} toggle={toggleAdd} type={state.type} />
  </div>
 )
}

export default Antecedent
