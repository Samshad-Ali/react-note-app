import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'
const Single_Note = ({notes,handleDelBtn}) => {



  return (
    <>
    
    <div className='note'>
        <main>
          <h2>{notes.title }</h2>
        <p>{notes.desc}</p>
        </main>

        <footer className='footer'>
          <small>{notes.date} | {notes.time}</small>
        <button className="del-btn" onClick={()=>(handleDelBtn(notes.id))}> <FaTrashAlt/></button>
        </footer>
    </div>
   
      
    </>
  )
}

export default Single_Note