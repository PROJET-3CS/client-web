import React, { FC } from 'react'

import Search from './Search'
import UserNav from './UserNav'

const Header: FC = () => {
  return (
    <div className="header">
      <Search />
      <UserNav />
    </div>
  )
}

export default Header
