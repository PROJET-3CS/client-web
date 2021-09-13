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
    <Link to="/users_management" className="App-link">
     <code>/Users Management</code>
    </Link>
    <Link to="/registration_requests" className="App-link">
     <code>/Registration Requests Management</code>
    </Link>
    {'  '}
    <Link to="/folder/edit" className="App-link">
     <code>/Edit Medical Folder</code>
    </Link>
    {'  '}
    <Link to="/examination" className="App-link">
     <code>/Examination</code>
    </Link>
   </div>
  </header>
 )
}

export default Home
