import formatNoteCardDate from '../../utility/date';
import classes from './NoteCard.module.css';

interface NoteCardProps {
  title: string;
  tags: string[];
  lastEdit: string;
}

const NoteCard = ({ title, tags, lastEdit }: NoteCardProps) => {
  return(
    <li className={classes.noteCardWrapper}>
      <p className={classes.title}>{title}</p>
      {tags.map((tag: string) => (
        <span key={tag} className={classes.tag}>{tag}</span>
      ))}
      <p className={classes.lastEdit}>{formatNoteCardDate(lastEdit)}</p>
    </li>
  );
};

export default NoteCard;