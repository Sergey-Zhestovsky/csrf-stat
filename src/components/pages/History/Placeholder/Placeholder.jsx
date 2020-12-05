import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { ReactComponent as Tumbleweed } from '../../../../assets/svg/tumbleweed.svg';

import styles from './placeholder.module.scss';

const Placeholder = (props) => {
  const { icon } = props;

  return (
    <Box className={styles.container}>
      {icon && (
        <Box className={styles.iconWrapper}>
          <Tumbleweed className={styles.icon} />
        </Box>
      )}
      <Typography className={styles.title}>nothing here.</Typography>
    </Box>
  );
};

export default Placeholder;
