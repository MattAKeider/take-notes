import { CiSearch as SearchIcon } from 'react-icons/ci';

import classes from './Search.module.css';

const Search = () => {
  return (
    <search className={classes.searchWrapper}>
      <SearchIcon className={classes.searchIcon} />
      <input className={classes.searchInput} type="text" placeholder="Search by title, content, or tags..." />
    </search>
  );
};

export default Search;