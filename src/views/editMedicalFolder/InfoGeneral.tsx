import React, { FC, useEffect, useState } from 'react'
import { Alert, Col, Row } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'

import { InfoGeneralType, ReactChangeEvent, User } from '../../helpers/types'
import { updatePatient } from '../../store/slices/folder'

import AwesomeButtonIcon from '../../components/AwesomeButton/AwesomeButtonIcon'
import Collapses from '../../components/Collapses/Collapses'
import PrimaryInput from '../../components/PrimaryInput/PrimaryInput'

import PrimarySelect from '../../components/PrimaryDropdown/PrimarySelect'
import { getFolder } from '../../store/selectors'

interface Props {
 patient: User | undefined
}

const InfoGeneral: FC<Props> = ({ patient }) => {
 // ===========================================================================
 // Selectors
 // ===========================================================================
 const { error, infoGeneral } = useSelector(getFolder)

 // ===========================================================================
 // Dispatch
 // ==========================================================================

 const dispatch = useDispatch()

 const _updatePatient = (payload: InfoGeneralType) => {
  dispatch(updatePatient(payload))
 }

 //  ==============================================================================
 //  State
 //  ==============================================================================
 const initState: InfoGeneralType = {
  firstname: patient?.firstname ? patient.firstname : '',
  lastname: patient?.lastname ? patient.lastname : '',
  gender: patient?.gender ? patient.gender : '',

  // to be fixed for later
  adress: patient?.adress ? patient.adress : '',

  birthDay: patient?.birthDay ? patient.birthDay : '',
  birthPlace: patient?.birthPlace ? patient.birthPlace : '',
  situation: patient?.situation ? patient.situation : '',
  speciality: patient?.speciality ? patient.speciality : '',
 }

 const [info, setInfo] = useState(initState)

 const [open, setOpen] = useState(true)

 const options = [
  { value: 'marie', label: 'Marié (e)' },
  { value: 'celibataire', label: 'Célibataire' },
  { value: 'divorce', label: 'Divorcé (e)' },
 ]

 const specialities = [
  { value: 'preparatoire', label: 'Cycle Préparatoire' },
  { value: 'superieur', label: 'Cycle Supérieur' },
  { value: 'superieur-siw', label: 'Cycle Supérieur - SIW' },
  { value: 'superieur-isi', label: 'Cycle Supérieur -ISI' },
 ]

 // ===========================================================================
 // Handlers
 // ===========================================================================
 const handleChange = (e: ReactChangeEvent) => {
  setInfo({
   ...info,
   [e.target.id]: e.target.value,
  })
 }

 const handleSelectSituation = (value: string) => {
  setInfo({
   ...info,
   situation: value,
  })
 }

 const handleSelectSpeciality = (value: string) => {
  setInfo({
   ...info,
   speciality: value,
  })
 }

 const submitInfoGeneral = () => {
  _updatePatient(info)
 }

 // ===========================================================================
 // Hooks
 // ===========================================================================
 useEffect(() => {
  setOpen(!open)
  setTimeout(() => {
   setOpen(false)
  }, 3000)
 }, [infoGeneral])

 return (
  <Collapses title="Informations Générales">
   <Col className="editfolder__collapse-card--col">
    <Alert isOpen={open} className="clinity-alert" color={!error ? 'success' : 'danger'}>
     {!error ? '🎉 Patient data was successfuly been updated !' : '🤕 Sorry something went wrong !'}
    </Alert>
    <Row md="2" className="editfolder__collapse-card--row">
     <PrimaryInput
      value={info?.firstname}
      id="firstname"
      name="firstname"
      type="text"
      label="Last Name"
      placeholder="ex. Yacine"
      onChange={handleChange}
     />
     <PrimaryInput
      id="lastname"
      value={info?.lastname}
      name="lastname"
      type="text"
      label="First Name"
      placeholder="ex. Kharroubi"
      onChange={handleChange}
     />
    </Row>
    <Row md="2" className="editfolder__collapse-card--row">
     <PrimaryInput
      id="gender"
      value={info?.gender}
      name="gender"
      type="text"
      label="Gender"
      placeholder="ex. Yacine"
      onChange={handleChange}
     />
     <PrimaryInput
      id="adress"
      value={info?.adress}
      name="adress"
      type="text"
      label="Address"
      placeholder="ex. Kharoubi"
      onChange={handleChange}
     />
    </Row>
    <Row md="2" className="editfolder__collapse-card--row">
     <PrimaryInput
      id="birthDay"
      value={info?.birthDay}
      name="birthDay"
      type="date"
      label="Birthday"
      placeholder="ex. 07/02/2001"
      onChange={handleChange}
     />
     <PrimaryInput
      id="birthPlace"
      value={info?.birthPlace}
      name="birthPlace"
      type="text"
      label="In"
      placeholder="ex. Relizane"
      onChange={handleChange}
     />
    </Row>
    <Row md="2" className="editfolder__collapse-card--row">
     <PrimarySelect
      defaultValue={info?.situation}
      label="Situation"
      options={options}
      name="situation"
      placeholder="Situation..."
      getValue={handleSelectSituation}
     />

     <PrimarySelect
      defaultValue={info?.speciality}
      options={specialities}
      name="speciality"
      label="Speciality"
      placeholder="ex. Cycle Supérieur"
      getValue={handleSelectSpeciality}
     />
    </Row>
    <AwesomeButtonIcon onClick={submitInfoGeneral} icon="check" text="Save Changes" />
   </Col>
  </Collapses>
 )
}

export default InfoGeneral
