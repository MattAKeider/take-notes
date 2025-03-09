import classes from './Notes.module.css';

const Notes = () => {
  return (
    <div className={classes.emptyNotesCard}>
      <p className={classes.emptyMessage}>
        You don't have any notes yet. Start a new note to capture your thoughts and ideas.
      </p>
    </div>
  );
};

export default Notes;