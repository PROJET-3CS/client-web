import React, { FC, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, Col } from 'reactstrap'
import AwesomeButtonIcon from '../../components/AwesomeButton/AwesomeButtonIcon'
import Collapses from '../../components/Collapses/Collapses'
import Medicament from '../../components/EditFolderComponent/Medicament'
import Tabac from '../../components/EditFolderComponent/Tabac'
import { AntecedentType, Folder } from '../../helpers/types'
import { getFolder } from '../../store/selectors'
import { updateInfoAntecedent } from '../../store/slices/folder'

interface Props {
 folder: Folder | undefined
}

const Antecedent: FC<Props> = ({ folder }) => {
 // ===========================================================================
 // Selectors
 // ===========================================================================
 const { error, antecedent } = useSelector(getFolder)

 // ===========================================================================
 // Dispatch
 // ==========================================================================

 const dispatch = useDispatch()

 const _updateFolder = (payload: AntecedentType) => {
  dispatch(updateInfoAntecedent(payload))
 }

 //  ==============================================================================
 //  State
 //  ==============================================================================
 const initState: AntecedentType = {
  fumer: folder?.fumer ? folder.fumer : {},
  chiquer: folder?.chiquer ? folder.chiquer : {},
  prise: folder?.prise ? folder.prise : {},
  exFumeur: folder?.exFumeur ? folder.exFumeur : {},
  medicaments: folder?.medicaments ? folder.medicaments : [],
 }

 const [info, setInfo] = useState(initState)

 const [open, setOpen] = useState(false)

 // ===========================================================================
 // Handlers
 // ===========================================================================

 const handleTabacChange = (type: string, value: boolean, nbr: number) => {
  setInfo({
   ...info,
   [type]: { value, nbr },
  })
 }

 const handleMedicamentChange = (payload: string[]) => {
  setInfo({
   ...info,
   medicaments: payload,
  })
 }

 const submitInfoAntecedent = () => {
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
 }, [antecedent])

 return (
  <Collapses title="Antécédents Personnels">
   <Col className="editfolder__collapse-card--col">
    <Alert isOpen={open} className="clinity-alert" color={!error ? 'success' : 'danger'}>
     {!error
      ? '🎉 Medical folder data was successfuly updated !'
      : '🤕 Sorry something went wrong !'}
    </Alert>
    <div>
     <p className="editfolder__collapse-card--contentsubtitle">Tabac</p>
     <Tabac
      fumer={info?.fumer}
      prise={info?.prise}
      chiquer={info?.chiquer}
      exFumeur={info?.exFumeur}
      handleTabacChange={handleTabacChange}
     />
    </div>
    <div>
     <p className="editfolder__collapse-card--contentsubtitle">Médicaments</p>
     <Medicament handleMedicamentChange={handleMedicamentChange} medicaments={info?.medicaments} />
    </div>
    <AwesomeButtonIcon onClick={submitInfoAntecedent} icon="check" text="Save Changes" />
   </Col>
  </Collapses>
 )
}

export default Antecedent
