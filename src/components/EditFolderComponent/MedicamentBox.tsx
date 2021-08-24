import React, { FC } from 'react'
import { Button } from 'reactstrap'

interface Props {
 box: string
 handleRemoveMedicament: (payload: string) => void
}

const MedicamentBox: FC<Props> = ({ box, handleRemoveMedicament }) => {
 return (
  <Button
   color="primary"
   className="editfolder__medicalsection-box"
   onClick={() => {
    handleRemoveMedicament(box)
   }}
  >
   {box}
   <span className="editfolder__medicalsection-box--close">X</span>
  </Button>
 )
}

export default MedicamentBox
