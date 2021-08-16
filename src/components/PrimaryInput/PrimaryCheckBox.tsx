import { useState } from 'react'
import { Button } from 'reactstrap'
import './PrimaryCheckBox.scss'

const PrimaryCheckBox = () => {
 const [rSelected, setRSelected] = useState<number | undefined>()

 return (
  <div>
   <Button
    className="editfolder__checkbox"
    color="primary"
    onClick={() => {
     setRSelected(1)
    }}
    active={rSelected === 1}
   >
    A+
   </Button>
   <Button
    className="editfolder__checkbox"
    color="primary"
    onClick={() => {
     setRSelected(2)
    }}
    active={rSelected === 2}
   >
    A-
   </Button>
   <Button
    className="editfolder__checkbox"
    color="primary"
    onClick={() => {
     setRSelected(3)
    }}
    active={rSelected === 3}
   >
    B+
   </Button>
   <Button
    className="editfolder__checkbox"
    color="primary"
    onClick={() => {
     setRSelected(4)
    }}
    active={rSelected === 4}
   >
    B-
   </Button>

   <Button
    className="editfolder__checkbox"
    color="primary"
    onClick={() => {
     setRSelected(5)
    }}
    active={rSelected === 5}
   >
    O+
   </Button>
   <Button
    className="editfolder__checkbox"
    color="primary"
    onClick={() => {
     setRSelected(6)
    }}
    active={rSelected === 6}
   >
    O-
   </Button>
   <Button
    className="editfolder__checkbox"
    color="primary"
    onClick={() => {
     setRSelected(7)
    }}
    active={rSelected === 7}
   >
    AB+
   </Button>
   <Button
    className="editfolder__checkbox"
    color="primary"
    onClick={() => {
     setRSelected(8)
    }}
    active={rSelected === 8}
   >
    AB-
   </Button>
  </div>
 )
}

export default PrimaryCheckBox
