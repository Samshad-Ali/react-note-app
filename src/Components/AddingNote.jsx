import React from "react";
import { useRef } from "react";
import { useState } from "react";

const AddingNote = ({Addnote}) => {

         const [inputText,setInputText] = useState('')
         const [textArea,setTextArea] = useState('')

  function handleChange(e) {
    setInputText(e.target.value)
  }
  function handleTExtChange(e) {
    setTextArea(e.target.value)
  }
  
  function handleSaveBtn(e) {
    if (inputText.trim().length>0 && textArea.trim().length >0)
    {
      Addnote(inputText, textArea)
      setInputText('')
      setTextArea('')
    }
    else {
      alert('Add some Title and Description...')
    }

    }

  let textLenght = 300;

  return (
    <div className="note add-new">
      <div className="add">
        <input type="text" placeholder="Title here..." onChange={handleChange}
         value={inputText} />

        <textarea
          cols="30"
          rows="10"
          maxLength={300}
                  placeholder="Add the task..."
          onChange={handleTExtChange}
          value={textArea}
        ></textarea>
      </div>
      <footer>
        <small>{textLenght-textArea.length} : Remaining</small>
        <button onClick={handleSaveBtn}>Save</button>
      </footer>
    </div>
  );
};

export default AddingNote;
