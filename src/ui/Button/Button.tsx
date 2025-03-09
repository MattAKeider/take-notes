import { type ComponentPropsWithoutRef } from 'react';
import { type IconType } from 'react-icons';

import classes from './Button.module.css';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  Icon?: IconType;
};

const Button = ({Icon, children, ...props}: ButtonProps) => {
  return (
    <button {...props} className={`${classes.button} ${props.className}`}>
      {Icon && <Icon className={classes.icon} />}
      {children}
    </button>
  );
};

export default Button;