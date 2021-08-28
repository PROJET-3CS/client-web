import { FC, ComponentProps } from 'react'
import { Input } from 'reactstrap'
import { InputProps } from '../../helpers/types'
import './DoctorBox.scss'

interface Props extends InputProps {
 image: string
 name: string
 speciality: ComponentProps<typeof Input>['label']
 // eslint-disable-next-line no-unused-vars
 selectDoctor: (payload: string) => void
 doctor: number | string
 selectedDoctor: number | string
}

const DoctorBox: FC<Props> = ({ id, doctor, image, name, speciality, selectDoctor, selectedDoctor }) => {
 return (
  <button id={id} onClick={() => {selectDoctor(`${doctor}`)}} type="button" className={`doctorbox ${selectedDoctor === doctor.toString() ? 'doctorbox-active': ''}`}>
   <img src={image} alt="" />
   <div>
    <p className="doctorbox-title">{name}</p>
    <p className="doctorbox-speciality">{speciality}</p>
   </div>
  </button>
 )
}

export default DoctorBox
