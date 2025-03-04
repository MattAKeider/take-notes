import logo from '../../assets/images/logo.svg';
import classes from './NavigationBar.module.css';

const NavigationBar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>
          <img src={logo} alt="Notes logo" />
        </div>
        <nav className={classes.navigation}>
          <div className={classes.noteCategories}>
            <p>ALL NOTES LINK</p>
            <p>TEMP ARCHIVED LINK</p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;