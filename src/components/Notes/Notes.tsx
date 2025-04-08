import NoteCard from '../NoteCard/NoteCard';
import { Note } from '../../data/data';
import classes from './Notes.module.css';

interface NotesProps {
  notes: Note[];
}

const Notes = ({ notes }: NotesProps) => {
  if(notes.length <= 0) {
    return (
      <div className={classes.emptyNotesCard}>
        <p className={classes.emptyMessage}>
          You don't have any notes yet. Start a new note to capture your thoughts and ideas.
        </p>
      </div>
    );
  }

  return (
    <ul className={classes.notesList}>
      {notes.map((note: Note) => (
        <NoteCard key={note.title} title={note.title} tags={note.tags} lastEdit={note.lastEdited} />
      ))}
    </ul>
  );
};

export default Notes;