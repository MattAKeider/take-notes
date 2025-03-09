import { GoPlus as PlusIcon } from 'react-icons/go';

import Button from '../../ui/Button/Button';
import Notes from '../Notes/Notes';
import classes from './SideBar.module.css';

const SideBar = () => {
  return (
    <aside className={classes.sidebar}>
      <div className={classes.sidebarWrapper}>
        <Button Icon={PlusIcon}>
          Create New Note
        </Button>
        <Notes />
      </div>
    </aside>
  );
};

export default SideBar;