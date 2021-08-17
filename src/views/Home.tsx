import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import '../App.css'

const Home: FC = () => {
 return (
  <header className="App-header">
   <img src={logo} className="App-logo" alt="logo" />
   <p>Welcome Back</p>
   <div className="nav">
    <Link to="/login" className="App-link">
     <code>/Login</code>
    </Link>
    {'  '}
    <Link to="dashboard" className="App-link">
     <code>/Dashboard</code>
    </Link>
    {'  '}
    <Link to="/signup" className="App-link">
     <code>/Signup</code>
    </Link>
    {'  '}
    <Link to="/resetpassword" className="App-link">
     <code>/Reset Password</code>
    </Link>
    <Link to="/management" className="App-link">
     <code>/Management</code>
    </Link>
    {'  '}
    <Link to="/editmedicalfolder" className="App-link">
     <code>/Edit Medical Folder</code>
    </Link>
   </div>
  </header>
 )
}

export default Home
