import React from "react";
import AddingNote from "./AddingNote";
import Single_Note from "./Single_Note";

const Note = ({ note,Addnote,handleDelBtn }) => {
  return (
    <div className="note-box">
          <AddingNote Addnote={ Addnote} />
          {note.map((notes) => (
              <Single_Note key={notes.id} id={notes.id} notes={notes} handleDelBtn={handleDelBtn}
              />
      ))}
    </div>
  );
};

export default Note;
