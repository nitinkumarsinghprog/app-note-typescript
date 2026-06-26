interface NoteFormProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  addNote: () => void;
}

function NoteForm({
  text,
  setText,
  addNote,
}: NoteFormProps) {
  return (
    <>
      <textarea
        placeholder="Write your note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="add-btn" onClick={addNote}>
        Add Note
      </button>
    </>
  );
}

export default NoteForm;