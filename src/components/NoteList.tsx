import type { Note } from "../types/Note";
import NoteCard from "./NoteCard";

interface NoteListProps {
  notes: Note[];
  deleteNote: (id: number) => void;
}

function NoteList({
  notes,
  deleteNote,
}: NoteListProps) {
  if (notes.length === 0) {
    return <h3>No Notes Found</h3>;
  }

  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
}

export default NoteList;