import React from 'react';
import classnames from 'classnames';
import { Tooltip, Box, Typography } from '@material-ui/core';

import styles from './label.module.scss';

const Label = (props) => {
  const { title, value, tooltip } = props;

  const getValue = (data, description) => {
    let result = (
      <Typography className={classnames(styles.value, { [styles.tooltip]: !!description })}>
        {data}
      </Typography>
    );
    if (description) result = <Tooltip title={description}>{result}</Tooltip>;
    return result;
  };

  return (
    <Box className={styles.wrapper}>
      <Typography className={styles.title}>{title}</Typography>
      {getValue(value, tooltip)}
    </Box>
  );
};

export default Label;
