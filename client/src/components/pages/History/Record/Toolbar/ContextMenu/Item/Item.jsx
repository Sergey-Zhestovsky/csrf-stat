import React from 'react';
import { MenuItem, ListItemIcon, ListItemText } from '@material-ui/core';

import styles from './item.module.scss';

export const variants = {
  delete: styles.delete,
};

const Item = (props) => {
  const { icon: Icon, text, onClick = () => {}, variant } = props;

  return (
    <MenuItem onClick={onClick} className={variants[variant]}>
      <ListItemIcon className={styles.icon}>
        <Icon fontSize="small" />
      </ListItemIcon>
      <ListItemText className={styles.text} primary={text} />
    </MenuItem>
  );
};

export default Item;
