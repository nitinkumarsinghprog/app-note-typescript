import { useState } from "react";
import type { Note } from "../types/Note";

interface NoteCardProps {
  note: Note;
  deleteNote: (id: number) => void;
  updateNote: (id: number, updatedText: string) => void;
}

function NoteCard({
  note,
  deleteNote,
  updateNote,
}: NoteCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);

  const handleSave = () => {
    if (!editedText.trim()) return;

    updateNote(note.id, editedText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedText(note.text);
    setIsEditing(false);
  };

  return (
    <div className="note-card">
      {isEditing ? (
        <>
          <textarea
            value={editedText}
            onChange={(e) =>
              setEditedText(e.target.value)
            }
          />

          <div className="button-group">
            <button
              className="save-btn"
              onClick={handleSave}
            >
              Save
            </button>

            <button
              className="cancel-btn"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <p>{note.text}</p>

          <div className="button-group">
            <button
              className="edit-btn"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteNote(note.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default NoteCard;