import { useEffect, useState } from 'react';
import { TbTag } from 'react-icons/tb';

import NavItem from '../NavItem/NavItem';
import getAllTags from '../../utility/helper';
import notes from '../../data/data';
import classes from './Tags.module.css';

interface TagsProps {
  onClickTag: (tagText: string) => void;
  selectedTag: string;
}

const Tags = ({ onClickTag, selectedTag }: TagsProps) => {
  // TODO: raise state. This is only temporary!
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    setTags(getAllTags(notes));
  }, [notes]);

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