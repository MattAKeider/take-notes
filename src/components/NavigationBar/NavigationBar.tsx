import { useState } from 'react';
import { HiOutlineHome as Home} from 'react-icons/hi';
import { MdOutlineArchive as Archive } from 'react-icons/md';

import NavItem from '../NavItem/NavItem';
import logo from '../../assets/images/logo.svg';
import classes from './NavigationBar.module.css';

const allNotes = 'All Notes';
const archivedNotes = 'Archived Notes';

const NavigationBar = () => {
  const [selectedLink, setSelectedLink] = useState<string>(allNotes);

  function handleSelectedLink(linkText: string) {
    setSelectedLink(linkText);
  }

  return (
    <div className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>
          <img src={logo} alt="Notes logo" />
        </div>
        <nav className={classes.navigation}>
          <div className={classes.noteCategories}>
            <NavItem LinkIcon={Home} linkText={allNotes} selected={selectedLink === allNotes} onClickLink={handleSelectedLink} />
            <NavItem LinkIcon={Archive} linkText={archivedNotes} selected={selectedLink === archivedNotes} onClickLink={handleSelectedLink} />
          </div>
          {/* TODO: Add Types component */}
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;