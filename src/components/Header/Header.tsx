import { IoSettingsOutline as SettingsIcon } from 'react-icons/io5';

import Search from '../Search/Search';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerWrapper}>
        <h2 className={classes.headerText}>All Notes</h2>
        <div className={classes.actionsWrapper}>
          <Search />
          <SettingsIcon className={classes.settingsIcon} />
        </div>
      </div>
    </header>
  );
};

export default Header;