import React from 'react';
import { Box, Typography } from '@material-ui/core';

import styles from './label.module.scss';

const Label = (props) => {
  const { name, value } = props;
  let result = <Typography className={styles.value}>{value}</Typography>;

  if (name) {
    result = (
      <Box className={styles.label}>
        <Typography className={styles.name}>{name}</Typography>
        {result}
      </Box>
    );
  }

  return result;
};

export default Label;
