import { FC } from 'react'
import { Col } from 'reactstrap'
import { TabacType } from '../../helpers/types'
import TabacBoxes from './TabacBoxes'

interface Props {
 // eslint-disable-next-line no-unused-vars
 handleTabacChange: (type: string, value: boolean, nbr: number) => void
 fumer: TabacType
 prise: TabacType
 chiquer: TabacType
 exFumeur: TabacType
}

const Tabac: FC<Props> = ({ handleTabacChange, fumer, chiquer, prise, exFumeur }) => {
 return (
  <div>
   <Col className="editfolder__tabacsection-col">
    <TabacBoxes
     btn1text="Oui, déja"
     btn2text="Non, jamais"
     inputname="fumer"
     titre1="à fumer:"
     titre2="Nbr Cigarettes/j:"
     handleTabacChange={handleTabacChange}
     tabac={fumer}
    />
    <TabacBoxes
     btn1text="Oui, déja"
     btn2text="Non, jamais"
     inputname="chiquer"
     titre1="à chiquer:"
     titre2="Nbr Cigarettes/j:"
     handleTabacChange={handleTabacChange}
     tabac={chiquer}
    />
    <TabacBoxes
     btn1text="Oui, déja"
     btn2text="Non, jamais"
     inputname="prise"
     titre1="à prise:"
     titre2="Nbr Cigarettes/j:"
     handleTabacChange={handleTabacChange}
     tabac={prise}
    />
    <TabacBoxes
     btn1text="Oui, déja"
     btn2text="Non, jamais"
     inputname="exFumeur"
     titre1="ancien fumeur: "
     titre2="Période dexposition:"
     handleTabacChange={handleTabacChange}
     tabac={exFumeur}
    />
   </Col>
  </div>
 )
}
export default Tabac
