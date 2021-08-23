import { FC, useState, useEffect } from 'react'
import { Button } from 'reactstrap'
import { InputProps } from '../../helpers/types'
import './PrimaryCheckBox.scss'

interface Props {
 handleBloodChange: (payload: string | undefined) => void
}

const PrimaryCheckBox: FC<InputProps & Props> = ({ value, handleBloodChange }) => {
 const [rSelected, setRSelected] = useState(value)

 useEffect(() => {
  handleBloodChange(rSelected?.toString())
 }, [rSelected])

 return (
  <div>
   <Button
    className={`editfolder__checkbox ${rSelected === 'A+' ? 'editfolder__checkbox-active' : ''}`}
    color="primary"
    onClick={() => {
     setRSelected('A+')
    }}
    active={rSelected === 'A+'}
   >
    A+
   </Button>
   <Button
    className={`editfolder__checkbox ${rSelected === 'A-' ? 'editfolder__checkbox-active' : ''}`}
    color="primary"
    onClick={() => {
     setRSelected('A-')
    }}
    active={rSelected === 'A-'}
   >
    A-
   </Button>
   <Button
    className={`editfolder__checkbox ${rSelected === 'B+' ? 'editfolder__checkbox-active' : ''}`}
    color="primary"
    onClick={() => {
     setRSelected('B+')
    }}
    active={rSelected === 'B+'}
   >
    B+
   </Button>
   <Button
    className={`editfolder__checkbox ${rSelected === 'B-' ? 'editfolder__checkbox-active' : ''}`}
    color="primary"
    onClick={() => {
     setRSelected('B-')
    }}
    active={rSelected === 'B-'}
   >
    B-
   </Button>

   <Button
    className={`editfolder__checkbox ${rSelected === 'O+' ? 'editfolder__checkbox-active' : ''}`}
    color="primary"
    onClick={() => {
     setRSelected('O+')
    }}
    active={rSelected === 'O+'}
   >
    O+
   </Button>
   <Button
    className={`editfolder__checkbox ${rSelected === 'O-' ? 'editfolder__checkbox-active' : ''}`}
    color="primary"
    onClick={() => {
     setRSelected('O-')
    }}
    active={rSelected === 'O-'}
   >
    O-
   </Button>
   <Button
    className={`editfolder__checkbox ${rSelected === 'AB+' ? 'editfolder__checkbox-active' : ''}`}
    color="primary"
    onClick={() => {
     setRSelected('AB+')
    }}
    active={rSelected === 'AB+'}
   >
    AB+
   </Button>
   <Button
    className={`editfolder__checkbox ${rSelected === 'AB-' ? 'editfolder__checkbox-active' : ''}`}
    color="primary"
    onClick={() => {
     setRSelected('AB-')
    }}
    active={rSelected === 'AB-'}
   >
    AB-
   </Button>
  </div>
 )
}

export default PrimaryCheckBox
