import React from 'react';
import { Grid, Box } from '@material-ui/core';
import Metrics from './Metrics/Metrics';
import Chart from './Chart/Chart';

const chartData = [
  [1, 5],
  [2, 8],
  [3, 45],
  [4, 12],
  [5, 46],
  [6, 32],
];

const avgStat = {
  speed: 123,
  delay: 341,
  queue: 12,
  load: 723,
};

const Statistics = (props) => {
  return (
    <Box>
      <Grid container spacing={4}>
        <Metrics avgStat={avgStat} />
        <Chart data={chartData} />
      </Grid>
    </Box>
  );
};

export default Statistics;
