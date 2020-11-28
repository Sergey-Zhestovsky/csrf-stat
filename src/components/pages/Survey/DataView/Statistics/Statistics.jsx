import React from 'react';
import { Grid, Box } from '@material-ui/core';
import Metrics from './Metrics/Metrics';
import Chart from './Chart/Chart';

const Statistics = (props) => {
  const { chartMode, onChangeMode, statistics, data } = props;

  return (
    <Box>
      <Grid container spacing={4}>
        <Metrics avgStat={statistics} />
        <Chart data={data} mode={chartMode} onChangeMode={onChangeMode} />
      </Grid>
    </Box>
  );
};

export default Statistics;
