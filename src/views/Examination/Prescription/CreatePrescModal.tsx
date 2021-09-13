/* eslint-disable max-lines */
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, useEffect, useState } from 'react'
import { Modal, ModalBody, FormGroup, Label, Row, Col, Form } from 'reactstrap'
import AwesomeButton from '../../../components/AwesomeButton/AwesomeButton'
import SecondarySelect from '../../../components/PrimaryDropdown/SecondarySelect'
import SecondaryInput from '../../../components/PrimaryInput/SecondaryInput'
import { medicaments, posolgies } from '../../../helpers/db/medicaments'
import {
 Medicament,
 ModalProps,
 OptionType,
 ReactChangeEvent,
 ReactSubmitEvent,
} from '../../../helpers/types'

interface Props {
 // eslint-disable-next-line no-unused-vars
 submitHandler: (med: Medicament) => void
}

interface stateProps {
 nomCommercial: string
 type: string
 foisParJours: number | string
 qnt: number | string
 qntType: number | string
 medicaments: OptionType[]
 medTypes: OptionType[]
}

const CreatePrescModal: FC<Props & ModalProps> = ({ modal, toggle, submitHandler }) => {
 //  ==============================================================================
 //  State
 //  ==============================================================================
 const initState: stateProps = {
  nomCommercial: '',
  type: '',
  foisParJours: '',
  qnt: 0,
  qntType: '',
  medicaments: [],
  medTypes: [],
 }

 const [state, setState] = useState(initState)

 const qspOptions: OptionType[] = [
  { value: 'qsp', label: 'QSP' },
  { value: 'boite', label: 'Boite' },
 ]

 // ===========================================================================
 // Handlers
 // ===========================================================================

 const formatMedOptions = () => {
  const meds: OptionType[] = medicaments.map((el) => {
   return {
    value: el,
    label: el,
   }
  })

  const medTypes: OptionType[] = posolgies.map((el) => {
   return {
    value: el,
    label: el,
   }
  })

  setState({
   ...state,
   medicaments: meds,
   medTypes,
  })
 }

 const handleSelectMedicament = (value: string) => {
  setState({
   ...state,
   nomCommercial: value,
  })
 }

 const handleSelectPosologie = (value: string) => {
  setState({
   ...state,
   type: value,
  })
 }

 const handleSelectQntType = (value: string) => {
  setState({
   ...state,
   qntType: value,
  })
 }

 const handleChange = (e: ReactChangeEvent) => {
  setState({
   ...state,
   [e.target.id]: e.target.value,
  })
 }

 const submitMedicament = (e: ReactSubmitEvent) => {
  e.preventDefault()
  submitHandler({
   nomCommercial: state.nomCommercial,
   type: state.type,
   foisParJours: state.foisParJours,
   qnt: state.qnt,
   qntType: state.qntType,
  })

  setState({
   ...state,
   nomCommercial: '',
   type: '',
   foisParJours: '',
   qnt: '',
   qntType: '',
  })
 }

 // ===========================================================================
 // Hooks
 // ===========================================================================

 useEffect(() => {
  formatMedOptions()
 }, [])

 return (
  <div>
   <Modal
    isOpen={modal}
    modalTransition={{ timeout: 100 }}
    backdropTransition={{ timeout: 400 }}
    toggle={toggle}
    className="newappointment__resultmodal"
   >
    <ModalBody className="newappointment__resultmodal-body">
     <Form onSubmit={submitMedicament}>
      <div className="newappointment__resultmodal-header">
       <p>Ajouter un médicament</p>
       <FontAwesomeIcon onClick={toggle} icon={faWindowClose} color="primary-color" />
      </div>
      <div>
       <FormGroup className="newappointment__resultmodal-formgroup">
        <Label className="newappointment__resultmodal-formgroup--label">
         Selectionner médicament
        </Label>
        <SecondarySelect
         id="nomCommercial"
         name="nomCommercial"
         label="Nom Commercial"
         options={state.medicaments}
         getValue={handleSelectMedicament}
         defaultValue={state.nomCommercial}
         required
        />
       </FormGroup>
       <FormGroup className="newappointment__resultmodal-formgroup">
        <Label className="newappointment__resultmodal-formgroup--label">Posologie</Label>
        <Row>
         <Col>
          <SecondarySelect
           id="type"
           name="type"
           label="Type"
           options={state.medTypes}
           getValue={handleSelectPosologie}
           defaultValue={state.type}
           required
          />
         </Col>
         <Col>
          <SecondaryInput
           id="foisParJours"
           value={state.foisParJours}
           onChange={handleChange}
           name="finish"
           placeholder="/jour"
           type="number"
           label="Fois par jours"
           required
          />
         </Col>
        </Row>
       </FormGroup>
       <FormGroup className="newappointment__resultmodal-formgroup">
        <Label className="newappointment__resultmodal-formgroup--label">Quantité</Label>
        <Row md="2">
         <Col>
          <SecondaryInput
           id="qnt"
           value={state.qnt}
           onChange={handleChange}
           name="start"
           placeholder="ex. 3"
           type="number"
           label="Nombre"
           required
          />
         </Col>
         <Col>
          <SecondarySelect
           id="qntType"
           name="qsp"
           label="Qsp"
           options={qspOptions}
           getValue={handleSelectQntType}
           defaultValue={state.qntType}
           required
          />
         </Col>
        </Row>
       </FormGroup>
       <AwesomeButton>Ajouter Médicament</AwesomeButton>
      </div>
     </Form>
    </ModalBody>
   </Modal>
  </div>
 )
}

export default CreatePrescModal
