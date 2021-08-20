import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const _404: FC = () => {
 return (
  <div
   className="not_found"
   style={{
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F6FC',
   }}
  >
   <img alt="404 illustration" src="img/_404.svg" style={{ width: '60rem' }} />
   <div className="not_found-content">
    <span
     className="not_found-title"
     style={{ fontSize: '6rem', fontWeight: 600, color: '#5B63F6' }}
    >
     Whoops!
    </span>
    <p className="not_found-text" style={{ fontSize: '1.5rem' }}>
     We can&apos;t seem to find the page you are looking for
    </p>
    <Link to="/" style={{ textDecoration: 'none', color: 'black', fontSize: '1.5rem' }}>
     Go back <code style={{ textDecoration: 'underline', color: '#5B63F6' }}>/Home</code>
    </Link>
   </div>
  </div>
 )
}

export default _404
