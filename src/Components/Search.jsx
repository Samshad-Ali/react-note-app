import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
const Search = ({ handleSearch }) => {
  

  
  return (
      <div className='search-box'>
         <AiOutlineSearch size='1.4rem' className='s' />
          <input type="text" placeholder='Type to search notes.....' onChange={(e)=>{handleSearch(e.target.value)}}/>
    </div>
  )
}

export default Search