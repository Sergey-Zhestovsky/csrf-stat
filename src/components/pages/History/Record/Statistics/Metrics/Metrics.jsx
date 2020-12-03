import React from 'react';
import classnames from 'classnames';
import { Box, Typography } from '@material-ui/core';
import Label from './Label/Label';

import styles from './metrics.module.scss';

const StatView = (props) => {
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

const Metrics = (props) => {
  const { completeStatistics } = props;

  return (
    <Box className={styles.stat}>
      <StatView name="Speed" metric={completeStatistics.speed} />
      <StatView name="Delay" metric={completeStatistics.delay} />
      <StatView name="Queue" metric={completeStatistics.queue} />
      <StatView name="Load" metric={completeStatistics.load} />
    </Box>
  );
};

export default Metrics;
