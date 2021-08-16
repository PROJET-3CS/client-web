import { Col } from 'reactstrap'
import TabacBoxes from './TabacBoxes'

const Tabac = () => {
 return (
  <div>
   <Col className="editfolder__tabacsection-col">
    <TabacBoxes
     btn1text="Oui, déja"
     btn2text="Non, jamais"
     inputname="cigarette-fumer"
     titre1="à fumer:"
     titre2="Nbr Cigarettes/j:"
    />
    <TabacBoxes
     btn1text="Oui, déja"
     btn2text="Non, jamais"
     inputname="cigarette-chiquer"
     titre1="à chiquer:"
     titre2="Nbr Cigarettes/j:"
    />
    <TabacBoxes
     btn1text="Oui, déja"
     btn2text="Non, jamais"
     inputname="cigarette-prise"
     titre1="à prise:"
     titre2="Nbr Cigarettes/j:"
    />
    <TabacBoxes
     btn1text="Oui, déja"
     btn2text="Non, jamais"
     inputname="ancien-fumeur"
     titre1="ancien fumeur: "
     titre2="Période dexposition:"
    />
   </Col>
  </div>
 )
}
export default Tabac
