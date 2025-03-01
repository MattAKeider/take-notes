import settingIcon from '../../assets/Images/icon-settings.svg';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerWrapper}>
        <h2 className={classes.headerText}>All Notes</h2>
        <div className={classes.headerActions}>
          {/* TODO: Add Search component */}
          <p>SEARCH PLACEHOLDER</p>
          {/* TODO: Fix settings icon color */}
          <img className={classes.settingsIcon} src={settingIcon} alt="Settings gear icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;