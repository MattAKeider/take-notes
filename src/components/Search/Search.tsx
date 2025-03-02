import { CiSearch as SearchIcon } from 'react-icons/ci';

import classes from './Search.module.css';

const Search = () => {
  return (
    <div className={classes.searchWrapper}>
      <SearchIcon className={classes.searchIcon} />
      <input className={classes.searchInput} type="text" placeholder="Search by title, content, or tags..." />
    </div>
  );
};

export default Search;