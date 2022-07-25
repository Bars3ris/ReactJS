import React from 'react'
import { Search, SearchSpan, SearchInput } from './SearchElements'
import {FaSearch} from 'react-icons/fa'

const SearchBar = () => {

  return (
      <Search>
      <SearchSpan>
        <FaSearch />
      </SearchSpan>
      <SearchInput
        className="SearchInput"
        type="text"
        //placeholder = {placeholder}
        // onChange={onChange}
        smooth
        duration={500}
        spy={true}
        exact='true'
        offset={-80}
      />
    </Search>
  )
}

export default SearchBar
