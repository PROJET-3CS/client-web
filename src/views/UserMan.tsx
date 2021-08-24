import React, { FC } from 'react'
import LazyLoad from 'react-lazyload'
import '../styles/userman.scss'
import { Row, Col, Button, Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog, faBell } from '@fortawesome/free-solid-svg-icons'
import Layout from './layouts/Layout'
import SearchBar from '../components/SearchBar'
import OverBox from '../components/OverBox'
import MainTable from '../components/MainTable'

library.add(faCog, faBell)

const UserMan: FC = () => {
 const userprofile = {
  username: 'lebron james',
  userpic: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
 }

 // const [usersList] = useState<IState['users']>([
 //   {
 //     name: 'lebron james',
 //     year: 44,
 //     role: 'twahcer',
 //     ngroupe: '44',
 //     status: 'bini',
 //     lastconnexion: 'this is a string',
 //     url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
 //   },
 //   {
 //     name: 'lebron james',
 //     year: 44,
 //     role: 'twahcer',
 //     ngroupe: '44',
 //     status: 'bini',
 //     lastconnexion: 'this is a string',
 //     url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
 //   },
 //   {
 //     name: 'lebron james',
 //     year: 44,
 //     role: 'twahcer',
 //     ngroupe: '44',
 //     status: 'bini',
 //     lastconnexion: 'this is a string',
 //     url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
 //   },
 //   {
 //     name: 'lebron james',
 //     year: 44,
 //     role: 'twahcer',
 //     ngroupe: '44',
 //     status: 'bini',
 //     lastconnexion: 'this is a string',
 //     url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
 //   },
 //   {
 //     name: 'lebron james',
 //     year: 44,
 //     role: 'twahcer',
 //     ngroupe: '44',
 //     status: 'bini',
 //     lastconnexion: 'this is a string',
 //     url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
 //   },
 // ])

 return (
  <Layout>
   <Container className="userman-cnt">
    <Row>
     <Col md="6" sm="6" xs="6" className="userman-searchbar">
      <SearchBar />
     </Col>
     <Col md="6" sm="6" xs="6" className="navbar1">
      <ul className="navIcons">
       <li className="navIcon">
        <div className="tct">
         <p className="user-name">{userprofile.username}</p>
         <p className="user-opt">view profile</p>
        </div>
        <img src={userprofile.userpic} alt="" className="user-img" />
       </li>
       <li className="navIcon">
        <FontAwesomeIcon icon="bell" />
       </li>
       <li className="navIcon">
        <FontAwesomeIcon icon="cog" />
       </li>
      </ul>
     </Col>
    </Row>
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
