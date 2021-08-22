import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search: FC = () => {
  return (
    <form action="#" className="search">
      <input type="text" className="search__input" placeholder="Search..." />
      <button type="button" className="search__button">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  )
}

export default Search
