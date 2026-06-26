import type { Note } from "../types/Note";

interface NoteCardProps {
  note: Note;
  deleteNote: (id: number) => void;
}

function NoteCard({
  note,
  deleteNote,
}: NoteCardProps) {
  return (
    <div className="note-card">
      <p>{note.text}</p>

      <button
        className="delete-btn"
        onClick={() => deleteNote(note.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default NoteCard;