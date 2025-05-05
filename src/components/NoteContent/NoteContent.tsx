import { 
  BsTag as TagIcon, 
  BsClock as ClockIcon 
} from 'react-icons/bs';

import formatNoteCardDate from '../../utility/date';
import Button from '../../ui/Button/Button';
import { Note } from '../../data/data';
import classes from './NoteContent.module.css';

interface NoteContentProps {
  note: Note;
}

const NoteContent = ({ note }: NoteContentProps) => {
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>{note.title}</h3>
      <div className={classes.noteInfo}>
        <div className={classes.info}>
          <p className={classes.label}>
            <TagIcon className={classes.icon} />
            Tags
          </p>
          {note.tags.map((tag: string) => (
            <span className={classes.tagValue} key={tag}>{tag}</span>
          ))}
        </div>
        <div className={classes.info}>
          <p className={classes.label}>
            <ClockIcon className={classes.icon} />
            Last edited
          </p>
          <span>{formatNoteCardDate(note.lastEdited)}</span>
        </div>
      </div>
      <div className={classes.noteContent}>
        <p className={classes.content}>{note.content}</p>
      </div>
      <div className={classes.actions}>
        <Button className={classes.saveButton}>Save Note</Button>
        <Button className={classes.cancelButton}>Cancel</Button>
      </div>
    </div>
  );
};

export default NoteContent;