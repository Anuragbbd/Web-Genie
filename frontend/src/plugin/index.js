import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import SearchSystem from './SearchSystem'

const SearchPlugin = () => {
  return (
    <BrowserRouter>
        <SearchSystem />
    </BrowserRouter>
  )
}

export default SearchPlugin