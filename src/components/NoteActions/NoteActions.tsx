import { 
  MdOutlineArchive as Archive, 
  MdDeleteOutline as Delete 
} from 'react-icons/md';

import Button from '../../ui/Button/Button';
import classes from './NoteActions.module.css';

const NoteActions = () => {
  return (
    <div className={classes.wrapper}>
      <Button className={classes.button} Icon={Archive}>Archive Note</Button>
      <Button className={classes.button} Icon={Delete}>Delete Note</Button>
    </div>
  );
};

export default NoteActions;