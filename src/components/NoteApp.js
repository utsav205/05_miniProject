import React, { useState } from "react";
import "./NoteApp.css";

function NoteApp() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");

  // Handle adding a new note
  const handleAddNote = () => {
    if (noteText.trim()) {
      const newNote = {
        id: Date.now(),
        text: noteText,
        timestamp: new Date().toLocaleString(), // timestamp for the note
      };
      setNotes([...notes, newNote]);
      setNoteText(""); // Clear the input field after adding the note
    }
  };

  // Handle deleting a note
  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="App main">
      <h1>Notes App</h1>
      <div className="note-input">
        <input
          type="text"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Write a note..."
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>

      <div className="notes-list">
        {notes.length === 0 ? (
          <p>No notes yet. Add a note!</p>
        ) : (
          notes.map((note) => (
            <div key={note.id} className="note">
              <p>{note.text}</p>
              <small>{note.timestamp}</small>
              <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NoteApp;