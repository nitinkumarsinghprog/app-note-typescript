import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

import type { Note } from "../types/Note";

function App() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (!text.trim()) return;

    const newNote: Note = {
      id: Date.now(),
      text,
    };

    setNotes([newNote, ...notes]);
    setText("");
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (id: number, updatedText: string) => {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? { ...note, text: updatedText }
          : note
      )
    );
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <div className="container">
        <Header
          darkMode={darkMode}
          toggleTheme={() =>
            setDarkMode(!darkMode)
          }
        />

        <input
          className="search"
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <NoteForm
          text={text}
          setText={setText}
          addNote={addNote}
        />

        <NoteList
          notes={filteredNotes}
          deleteNote={deleteNote}
          updateNote={updateNote}
        />
      </div>
    </div>
  );
}

export default App;