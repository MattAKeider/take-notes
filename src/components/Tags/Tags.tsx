import { TbTag } from 'react-icons/tb';

import NavItem from '../NavItem/NavItem';
import classes from './Tags.module.css';

interface TagsProps {
  onClickTag: (tagText: string) => void;
  selectedTag: string;
  tags: string[];
}

const Tags = ({ onClickTag, selectedTag, tags }: TagsProps) => {
  return (
    <>
      <p className={classes.title}>Tags</p>
      <ul className={classes.tagList}>
        {tags.map((tag: string) => (
          <NavItem key={tag} LinkIcon={TbTag} linkText={tag} selected={selectedTag === tag} onClickLink={onClickTag} />
        ))}
      </ul>
    </>
  );
};

export default Tags;