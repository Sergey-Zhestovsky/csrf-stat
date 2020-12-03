import React from 'react';
import classnames from 'classnames';
import { Box, Typography } from '@material-ui/core';
import Label from './Label/Label';

import styles from './metrics.module.scss';

const StatView = (props) => {
  const { name, metric } = props;

  return (
    <Box className={styles.stat}>
      <Box className={styles.row}>
        <Typography className={styles.title}>{name}</Typography>
        <Label name="min" value={metric.min} />
        <Label name="avg" value={metric.avg} />
        <Label name="max" value={metric.max} />
      </Box>
      <Box className={classnames(styles.row, styles.center)}>
        <Label name="σ²" value={metric.variance} />
        <Label name="S" value={metric.standardDeviation} />
      </Box>
    </Box>
  );
};

const Metrics = (props) => {
  const { completeStatistics } = props;

  return (
    <Box>
      <StatView name="Speed" metric={completeStatistics.speed} />
      <StatView name="Delay" metric={completeStatistics.delay} />
      <StatView name="Queue" metric={completeStatistics.queue} />
      <StatView name="Load" metric={completeStatistics.load} />
    </Box>
  );
};

export default Metrics;
