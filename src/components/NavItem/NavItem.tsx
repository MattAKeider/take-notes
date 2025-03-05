import { RxCaretRight as Caret } from 'react-icons/rx';
import { type IconType } from 'react-icons';

import classes from './NavItem.module.css';

interface NavItemProps {
  LinkIcon: IconType;
  linkText: string;
  selected: boolean;
  url?: string;
  onClickLink: (linkText: string) => void;
}

const NavItem = ({ LinkIcon, linkText, selected, url = '#', onClickLink }: NavItemProps) => {
  return (
    <div className={`${classes.navItemWrapper} ${selected ? classes.selected : ''}`} onClick={() => onClickLink(linkText)}>
      <div className={classes.linkWrapper}>
        <LinkIcon className={`${classes.linkIcon} ${selected ? classes.blue : ''}`}/>
        <a href={url} className={`${classes.link} ${selected ? classes.dark : ''}`}>{linkText}</a>
      </div>
      {selected && <Caret className={classes.caretIcon}/>}
    </div>
  );
};

export default NavItem;