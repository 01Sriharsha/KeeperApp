import React from 'react';
import DeleteIcon from '../../../node_modules/@mui/icons-material/Delete';


export default function NoteKeeper(props) {

  const { title, content } = props.notedata;

  function handleClick() {
    return props.onDelete(props.id)
  }

  return (
    <div className='notedata'>
      <div className="note-info">
        <p>{props.id + 1}</p>
        <p>{new Date().toLocaleDateString()}</p>
      </div>
      <h1>{title}</h1>
      <p>{content}</p>
      <div className="notebtn">
        <button onClick={handleClick}>
          <DeleteIcon fontSize='large' />
        </button>
      </div>
    </div>
  )
}
