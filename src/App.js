import './Components/Style.css'
import Header from './Components/Header';
import Search from './Components/Search';
import Note from './Components/Note';
import { nanoid } from 'nanoid'
import { useState } from 'react';
import { useEffect } from 'react';


function App() {

  const SavedData = JSON.parse(localStorage.getItem('my-note'));
  const [note, setNote] = useState(SavedData?SavedData:[]);
  const [searchNote, setSearchNote] = useState('')
  const [darkmode,setDarkMode] = useState(false)


  
  useEffect(() => {
      localStorage.setItem('my-note', JSON.stringify(note))
    }, [note])
    
  
  // ----------------- Adding note or save code:

  function Addnote(inputText, textareaText) {
    
    const date = new Date();
    const time = new Date();

    //   console.log('input value is : ',inputText)
    // console.log('textarea value is : ', textareaText)

  
    const newNotes = {
      id: nanoid(),
      title: inputText,
      desc: textareaText,
      date: date.toLocaleDateString(),
      time: time.toLocaleTimeString()
    }
    
    const updatedNote = [...note, newNotes]
    setNote(updatedNote)
    
  }
  
  // ----------delete note code :

  function handleDelBtn(id) {
    // console.log(id)
    const filterNote = note.filter(ele=>ele.id!==id)
    setNote(filterNote)
  }

  //-------------search note code : 

  function handleSearch(search) {
        setSearchNote(search)
  }
  
  return (
    <div className={`${darkmode && 'dark-mode'}`}>
       <div className="container">
        <Header DarkMode={ setDarkMode } />
      <Search handleSearch={handleSearch} />
      
      <Note note={note.filter(ele=>ele.title.includes(searchNote))} Addnote={Addnote} handleDelBtn={handleDelBtn} />
    </div>
   </div>
  );
}

export default App;
