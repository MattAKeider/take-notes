import { GoPlus as PlusIcon } from 'react-icons/go';

import Button from '../../ui/Button/Button';
import Notes from '../Notes/Notes';
import { Note } from '../../data/data';
import classes from './SideBar.module.css';

interface SideBarProps {
  notes: Note[];
}

const SideBar = ({ notes }: SideBarProps) => {
  return (
    <aside className={classes.sidebar}>
      <div className={classes.sidebarWrapper}>
        <Button Icon={PlusIcon}>
          Create New Note
        </Button>
        <Notes notes={notes} />
      </div>
    </aside>
  );
};

export default SideBar;