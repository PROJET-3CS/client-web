import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers, faUserGraduate, faUserTie, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Col, Row } from 'reactstrap'
import './OverBox.scss'

library.add(faUsers, faUserGraduate, faUserTie, faUserPlus)

const OverBox: FC = () => {
 return (
  <Row className='ovrrow'>
   <Col lg="3" md="6" sm="6" className='ovrcol'>
    <div className="ovrbx">
     <p className="ovrtitle">Total Patients</p>
     <p className="ovrnmb">1500</p>
     <FontAwesomeIcon icon="users" className="users-icon" />
    </div>
   </Col>
   <Col lg="3" md="6" sm="6" className='ovrcol'>
    <div className="ovrbx">
     <p className="ovrtitle">Total Students</p>
     <p className="ovrnmb">1500</p>
     <FontAwesomeIcon icon="user-graduate" className="users-icon" />
    </div>
   </Col>
   <Col lg="3" md="6" sm="6" className='ovrcol'>
    <div className="ovrbx">
     <p className="ovrtitle">Total Employees</p>
     <p className="ovrnmb">1500</p>
     <FontAwesomeIcon icon="user-tie" className="users-icon" />
    </div>
   </Col>
   <Col lg="3" md="6" sm="6" className='ovrcol'>
    <div className="ovrbx">
     <p className="ovrtitle">Requests</p>
     <p className="ovrnmb">1500</p>
     <FontAwesomeIcon icon="user-plus" className="users-icon" />
    </div>
   </Col>
  </Row>
 )
}

export default OverBox
