import { type Note } from '../../data/data';
import classes from './MainContent.module.css';

interface MainContentProps {
  note: Note;
}

const MainContent = ({note}: MainContentProps) => {
  return (
    <main className={classes.mainContent}>{note.title}</main>
  );
};

export default MainContent;