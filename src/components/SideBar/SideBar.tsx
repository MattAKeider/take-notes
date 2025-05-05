import { GoPlus as PlusIcon } from 'react-icons/go';

import Button from '../../ui/Button/Button';
import Notes from '../Notes/Notes';
import { Note } from '../../data/data';
import classes from './SideBar.module.css';

interface SideBarProps {
  notes: Note[];
  onClick: (title: string) => void;
}

const SideBar = ({ notes, onClick }: SideBarProps) => {
  return (
    <aside className={classes.sidebar}>
      <div className={classes.sidebarWrapper}>
        <Button Icon={PlusIcon}>
          Create New Note
        </Button>
        <Notes notes={notes} onClickNote={onClick}/>
      </div>
    </aside>
  );
};

export default SideBar;