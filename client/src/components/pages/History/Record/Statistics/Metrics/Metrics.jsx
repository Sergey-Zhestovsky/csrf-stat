import React from 'react';
import { Box } from '@material-ui/core';
import StatisticsView from './StatisticsView/StatisticsView';

import styles from './metrics.module.scss';

const Metrics = (props) => {
  const { completeStatistics } = props;

  return (
    <Box className={styles.stat}>
      <StatisticsView name="Speed" metric={completeStatistics.speed} />
      <StatisticsView name="Delay" metric={completeStatistics.delay} />
      <StatisticsView name="Queue" metric={completeStatistics.queue} />
      <StatisticsView name="Load" metric={completeStatistics.load} />
    </Box>
  );
};

export default Metrics;
