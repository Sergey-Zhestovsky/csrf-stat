import React, { useState } from 'react';
import classnames from 'classnames';
import { Typography, Box, IconButton } from '@material-ui/core';
import TuneIcon from '@material-ui/icons/Tune';
import CachedIcon from '@material-ui/icons/Cached';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Filters from './Filters/Filters';
import Alert from '../../../parts/Alert/Alert';

import styles from './header.module.scss';

const Header = (props) => {
  const { withToolbar, onDeleteAll = () => {}, onRefresh = () => {}, onFilter = () => {} } = props;
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [filters, setFilters] = useState(false);

  const deleteHandler = () => {
    setDeleteAlert(true);
  };

  const deleteAllHandler = (answer) => {
    setDeleteAlert(false);
    if (!answer) return;
    onDeleteAll();
  };

  const toggleFilter = () => {
    setFilters((state) => !state);
  };

  return (
    <>
      <Box className={styles.titleContainer}>
        <Box>
          <Typography className={styles.title}>History</Typography>
        </Box>
        {withToolbar && (
          <Box>
            <IconButton className={classnames(styles.btn, styles.alertBtn)} onClick={deleteHandler}>
              <DeleteForeverIcon />
            </IconButton>
            <IconButton className={styles.btn} onClick={onRefresh}>
              <CachedIcon />
            </IconButton>
            <IconButton
              className={classnames(styles.btn, { [styles.active]: filters })}
              onClick={toggleFilter}
            >
              <TuneIcon />
            </IconButton>
          </Box>
        )}
      </Box>
      {filters && <Filters onFilter={onFilter} />}
      <Alert
        open={deleteAlert}
        onClose={deleteAllHandler}
        title="Do you want to delete ALL test results?"
        message="Once deleted, test results cannot be restored."
      />
    </>
  );
};

export default Header;
