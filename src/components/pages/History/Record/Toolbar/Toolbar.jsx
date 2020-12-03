import React from 'react';
import classnames from 'classnames';
import { Box, IconButton, CircularProgress } from '@material-ui/core';
import { ExpandMore, ExpandLess, MoreHoriz, Star } from '@material-ui/icons';
import ContextMenu from './ContextMenu/ContextMenu';

import styles from './toolbar.module.scss';

const Toolbar = (props) => {
  const {
    favorite,
    toggleFavorite = () => {},
    onDelete = () => {},
    dataLoading,
    collapse,
    toggleCollapse = () => {},
  } = props;

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => setOpen((prevOpen) => !prevOpen);
  const handleClose = (event) => setOpen(false);
  const toggleFavoriteAndClose = (...args) => {
    setOpen(false);
    toggleFavorite(...args);
  };
  const deleteAndClose = (...args) => {
    setOpen(false);
    onDelete(...args);
  };

  return (
    <Box className={styles.toolbar}>
      <IconButton
        className={classnames(styles.button)}
        onClick={toggleCollapse}
        disabled={dataLoading}
      >
        {dataLoading && (
          <Box className={styles.loadingBtn}>
            <CircularProgress />
          </Box>
        )}
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
        toggleFavorite={toggleFavoriteAndClose}
        onDelete={deleteAndClose}
      />
    </Box>
  );
};

export default Toolbar;
