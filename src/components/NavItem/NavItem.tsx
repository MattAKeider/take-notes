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
    <div data-testid="wrapper" className={`${classes.navItemWrapper} ${selected ? classes.selected : ''}`} onClick={() => onClickLink(linkText)}>
      <a href={url} className={`${classes.link} ${selected ? classes.selectedFont : ''}`}>
        <LinkIcon className={`${classes.linkIcon} ${selected ? classes.blueIcon : ''}`}/>
        {linkText}
      </a>
      {selected && <Caret className={classes.caretIcon}/>}
    </div>
  );
};

export default NavItem;