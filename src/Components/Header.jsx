import React from 'react';
import './Style.css';
import {MdNoteAlt} from 'react-icons/md'

const Header = ({DarkMode}) => {

  function handleTogglebtn() {
     DarkMode((Previous) => !Previous)
  }
  
 

  return (
      <div className='header'>
      <div className='h'><h1>Note-App</h1>
      <MdNoteAlt size='2.7rem' />
      </div>
      
          <label className="switch">
         <input type="checkbox" onClick={handleTogglebtn} />
         <span className="slider"></span>
        </label>
    </div>
    )
    
}

export default Header