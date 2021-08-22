import React, { FC } from 'react'
import '../styles/main.scss'
import { FormGroup, Input } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

const SearchBar: FC = () => {
  return (
    <FormGroup className="searchBar">
      <FontAwesomeIcon icon="search" className="search-icon" />
      <Input
        className="searchbar"
        type="search"
        name="search"
        id="exampleSearch"
        placeholder="search..."
      />
    </FormGroup>
  )
}

export default SearchBar
