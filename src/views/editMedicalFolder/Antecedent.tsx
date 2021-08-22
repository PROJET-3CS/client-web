import React, { FC } from 'react'
import { Col } from 'reactstrap'
import AwesomeButtonIcon from '../../components/AwesomeButton/AwesomeButtonIcon'
import Collapses from '../../components/Collapses/Collapses'
import Medicament from '../../components/EditFolderComponent/Medicament'
import Tabac from '../../components/EditFolderComponent/Tabac'

const Antecedent : FC = () => {
 return (
  <Collapses title="Antécédents Personnels">
   <Col className="editfolder__collapse-card--col">
    <div>
     <p className="editfolder__collapse-card--contentsubtitle">Tabac</p>
     <Tabac />
    </div>
    <div>
     <p className="editfolder__collapse-card--contentsubtitle">Médicaments</p>
     <Medicament />
    </div>
    <AwesomeButtonIcon icon="check" text="Save Changes" />
   </Col>
  </Collapses>
 )
}

export default Antecedent
