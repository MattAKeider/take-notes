import { GoPlus as PlusIcon } from 'react-icons/go';

import classes from './SideBar.module.css';
import Button from '../../ui/Button/Button';

const SideBar = () => {
  return (
    <aside className={classes.sidebar}>
      <div className={classes.sidebarWrapper}>
        <Button Icon={PlusIcon}>
          Create New Note
        </Button>
      </div>
    </aside>
  );
};

export default SideBar;