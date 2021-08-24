import React, { FC, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row, FormGroup, Label, Alert } from 'reactstrap'
import AwesomeButtonIcon from '../../components/AwesomeButton/AwesomeButtonIcon'
import Collapses from '../../components/Collapses/Collapses'
import PrimaryCheckBox from '../../components/PrimaryInput/PrimaryCheckBox'
import PrimaryInput from '../../components/PrimaryInput/PrimaryInput'
import { Folder, InfoMedicalType, ReactChangeEvent } from '../../helpers/types'
import { getFolder } from '../../store/selectors'
import { updateInfoMedical } from '../../store/slices/folder'

interface Props {
 folder: Folder | undefined
}

const InfoMedical: FC<Props> = ({ folder }) => {
 // ===========================================================================
 // Selectors
 // ===========================================================================
 const { error, infoMedical } = useSelector(getFolder)

 // ===========================================================================
 // Dispatch
 // ==========================================================================

 const dispatch = useDispatch()

 const _updateFolder = (payload: InfoMedicalType) => {
  dispatch(updateInfoMedical(payload))
 }

 //  ==============================================================================
 //  State
 //  ==============================================================================
 const initState: InfoMedicalType = {
  numFolder: folder?.numFolder ? folder.numFolder : '',
  socSecNum: folder?.socSecNum ? folder.socSecNum : '',

  // to be updated later
  tall: folder?.tall ? folder.tall : '',

  weight: folder?.weight ? folder.weight : '',
  blood: folder?.blood ? folder.blood : '',
 }

 const [info, setInfo] = useState(initState)

 const [open, setOpen] = useState(false)

 // ===========================================================================
 // Handlers
 // ===========================================================================
 const handleChange = (e: ReactChangeEvent) => {
  setInfo({
   ...info,
   [e.target.id]: e.target.value,
  })
 }

 const handleBloodChange = (payload: string | undefined) => {
  setInfo({
   ...info,
   blood: payload || '',
  })
 }

 const submitInfoMedical = () => {
  _updateFolder(info)
 }

 // ===========================================================================
 // Hooks
 // ===========================================================================
 const initialRender = useRef(true) // SOL from stackoverflow for excuting useEffect after the first renders

 useEffect(() => {
  if (initialRender.current) {
   initialRender.current = false
  } else {
   // initially called every time after the component renders
   setOpen(true)
   setTimeout(() => {
    setOpen(false)
   }, 3000)
  }
 }, [infoMedical])

 return (
  <Collapses title="Informations Médicales">
   <Col className="editfolder__collapse-card--col">
    <Alert isOpen={open} className="clinity-alert" color={!error ? 'success' : 'danger'}>
     {!error
      ? '🎉 Medical folder data was successfuly updated !'
      : '🤕 Sorry something went wrong !'}
    </Alert>
    <Row md="2" className="editfolder__collapse-card--row">
     <PrimaryInput
      id="numFolder"
      name="numFolder"
      type="text"
      label="N° Folder"
      placeholder="ex. Yacine"
      value={info?.numFolder}
      onChange={handleChange}
     />
     <PrimaryInput
      id="socSecNum"
      name="soc-sec-number"
      type="text"
      label="Social Security Number"
      placeholder="ex. Kharroubi"
      value={info?.socSecNum}
      onChange={handleChange}
     />
    </Row>
    <Row md="2" className="editfolder__collapse-card--row">
     <PrimaryInput
      id="tall"
      name="height"
      type="number"
      label="Height (in cm)"
      placeholder="ex. 173"
      value={info?.tall}
      onChange={handleChange}
     />
     <PrimaryInput
      id="weight"
      name="weight"
      type="number"
      label="Weight (in kg)"
      placeholder="ex. 60.3"
      value={info?.weight}
      onChange={handleChange}
     />
    </Row>
    <Row className="editfolder__collapse-card--row">
     <FormGroup className="Primary__form-group ">
      <Label className="Primary__form-label">Blood Type</Label>
      <PrimaryCheckBox id="blood" value={info?.blood} handleBloodChange={handleBloodChange} />
     </FormGroup>
    </Row>
    <AwesomeButtonIcon onClick={submitInfoMedical} icon="check" text="Save Changes" />
   </Col>
  </Collapses>
 )
}

export default InfoMedical
