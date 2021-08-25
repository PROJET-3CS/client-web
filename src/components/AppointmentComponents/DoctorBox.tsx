import { FC, ComponentProps } from 'react'
import { Input } from 'reactstrap'
import './DoctorBox.scss'

interface InputProps {
 image: ComponentProps<typeof Input>['placeholder']
 name: ComponentProps<typeof Input>['name']
 speciality: ComponentProps<typeof Input>['label']
}

const DoctorBox: FC<InputProps> = ({ image, name, speciality }) => {
 return (
  <div className="doctorbox">
   <img src={image} alt="" />
   <div>
    <p className="doctorbox-title">{name}</p>
    <p className="doctorbox-speciality">{speciality}</p>
   </div>
  </div>
 )
}

export default DoctorBox
