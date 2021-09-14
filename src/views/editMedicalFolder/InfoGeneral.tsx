/* eslint-disable max-lines */
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
 isOpen: number
 // eslint-disable-next-line no-unused-vars
 toggle: (number: number) => void
}

const InfoGeneral: FC<Props> = ({ patient, isOpen, toggle }) => {
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
  address: patient?.address ? patient.address : '',

  birthDay: patient?.birthDay ? patient.birthDay : '',
  birthPlace: patient?.birthPlace ? patient.birthPlace : '',
  situation: patient?.situation ? patient.situation : '',
  speciality: patient?.speciality ? patient.speciality : '',
  promo: patient?.promo ? patient.promo : '',
  groupe: patient?.groupe ? patient.groupe : '',
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

 const promoOptions = [
  { value: '1', label: '1CPI' },
  { value: '2', label: '2CPI' },
  { value: '3', label: '1CS' },
  { value: '4', label: '2CS' },
  { value: '5', label: '3CS' },
 ]

 const groupOptions = [
  { value: '1', label: 'G01' },
  { value: '2', label: 'G02' },
  { value: '3', label: 'G03' },
  { value: '4', label: 'G04' },
  { value: '5', label: 'G05' },
  { value: '6', label: 'G06' },
  { value: '7', label: 'G07' },
  { value: '8', label: 'G08' },
  { value: '9', label: 'G09' },
  { value: '10', label: 'G10' },
  { value: '11', label: 'G11' },
  { value: '12', label: 'G12' },
  { value: '13', label: 'G13' },
  { value: '14', label: 'G14' },
  { value: '15', label: 'G15' },
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

 const handleSelectPromo = (value: string) => {
  setInfo({
   ...info,
   promo: Number(value),
  })
 }

 const handleSelectGroup = (value: string) => {
  setInfo({
   ...info,
   groupe: Number(value),
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
  <Collapses title="Informations Générales" isOpen={isOpen === 1} toggleCollapse={() => {return toggle(1)}}>
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
      value={info?.address}
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
    <Row md="2" className="editfolder__collapse-card--row">
     <PrimarySelect
      defaultValue={info?.promo}
      label="Promo"
      options={promoOptions}
      name="Promo"
      placeholder="ex: 1CS"
      getValue={handleSelectPromo}
     />

     <PrimarySelect
      defaultValue={info?.groupe}
      options={groupOptions}
      name="group"
      label="Groupe"
      placeholder="ex: G05"
      getValue={handleSelectGroup}
     />
    </Row>
    <AwesomeButtonIcon onClick={submitInfoGeneral} icon="check" text="Save Changes" />
   </Col>
  </Collapses>
 )
}

export default InfoGeneral
