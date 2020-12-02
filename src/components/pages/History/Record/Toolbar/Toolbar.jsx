import React from 'react';
import classnames from 'classnames';
import { Box, IconButton } from '@material-ui/core';
import { ExpandMore, ExpandLess, MoreHoriz, Star } from '@material-ui/icons';
import ContextMenu from './ContextMenu/ContextMenu';

import styles from './toolbar.module.scss';

const Toolbar = (props) => {
  const {
    favorite,
    toggleFavorite = () => {},
    onDelete = () => {},
    collapse,
    toggleCollapse = () => {},
  } = props;

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => setOpen((prevOpen) => !prevOpen);
  const handleClose = (event) => setOpen(false);

  return (
    <Box className={styles.toolbar}>
      <IconButton className={styles.button} onClick={toggleCollapse}>
        {collapse ? <ExpandMore /> : <ExpandLess />}
      </IconButton>

      <IconButton
        className={classnames(styles.button, { [styles.favorite]: favorite })}
        onClick={toggleFavorite}
      >
        <Star />
      </IconButton>

      <IconButton className={styles.button} onClick={handleToggle}>
        <MoreHoriz ref={anchorRef} />
      </IconButton>

      <ContextMenu
        anchorRef={anchorRef}
        open={open}
        onClose={handleClose}
        favorite={favorite}
        toggleFavorite={toggleFavorite}
        onDelete={onDelete}
      />
    </Box>
  );
};

export default Toolbar;
