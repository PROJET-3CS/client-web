import React, { FC } from 'react'
import LazyLoad from 'react-lazyload'
import '../styles/userman.scss'
import { Row, Col, Button, Container } from 'reactstrap'
import Layout from './layouts/Layout'
import OverBox from '../components/OverBox'
import MainTable from '../components/MainTable'
import Header from '../components/Header'

const UserMan: FC = () => {
 return (
  <Layout>
   <Header />
   <Container className="userman-cnt">
    <Row className="maintt">
     <p className="main-title">Overview</p>
    </Row>
    <OverBox />
    <Row>
     <Col>
      <p className="main-title">Users list</p>
     </Col>
     <Col>
      <Button className="main-button"> + create new user</Button>
     </Col>
    </Row>

    <LazyLoad>
     <MainTable />
    </LazyLoad>
   </Container>
  </Layout>
 )
}

export default UserMan
