import React, { useState } from 'react'
import Navbar from './Components/Keeper/Navbar';
import NoteKeeper from './Components/Keeper/NoteKeeper';
import Footer from './Components/Keeper/Footer';
import InputData from './Components/Keeper/InputData'
// import { Button, Container} from 'reactstrap';


function App() {

  const [notes, setNotes] = useState([]);

  function addItem(input) {
    setNotes((prevNotes) => {
      return [...prevNotes, input]
    })
  }


  function deleteNote(id) {
    console.log('delete clicked');
    return setNotes((prevNotes) => {
      return prevNotes.filter((notes, index) => {
        return id !== index;
      })
    })
  }

  return (
    <div className="App">
      <Navbar />
      <div className="inputData">
        <InputData onAdd={addItem} />
      </div>
      <div className="container">
        {notes.map((note, index) => {
          return <NoteKeeper key={index} id={index} notedata={note} onDelete={deleteNote} />
        })}
      </div>
      {/* <Container>
        <Button container={true} color='danger' outline>Hello</Button>
      </Container> */}
      <Footer />
    </div>
  );
}

export default App;
