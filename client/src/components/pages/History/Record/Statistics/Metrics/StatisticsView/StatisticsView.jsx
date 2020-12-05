import React from 'react';
import classnames from 'classnames';
import { Box, Typography } from '@material-ui/core';
import Label from './Label/Label';

import styles from './statistics-view.module.scss';

const StatisticsView = (props) => {
  const { name, metric } = props;

  return (
    <>
      <Box className={classnames(styles.col, styles.titleCol)}>
        <Typography className={styles.title}>{name}</Typography>
      </Box>
      <Box className={styles.col}>
        <Box className={styles.row}>
          <Label name="min" value={metric.min} />
          <Label name="avg" value={metric.avg} />
          <Label name="max" value={metric.max} />
        </Box>
        <Box className={styles.row}>
          <Label name="σ²" value={metric.variance} />
          <Label name="S" value={metric.standardDeviation} />
        </Box>
      </Box>
    </>
  );
};

export default StatisticsView;
