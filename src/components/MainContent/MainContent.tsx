import NoteActions from '../NoteActions/NoteActions';
import NoteContent from '../NoteContent/NoteContent';
import { type Note } from '../../data/data';
import classes from './MainContent.module.css';

interface MainContentProps {
  note: Note;
}

const MainContent = ({ note }: MainContentProps) => {
  return (
    <main className={classes.mainContent}>
      <NoteContent note={note} />
      <NoteActions />
    </main>
  );
};

export default MainContent;