import React from 'react';
import { Grid, Box, Paper } from '@material-ui/core';
import Metrics from './Metrics/Metrics';
import Chart from '../../../../utils/Chart/Chart';

import styles from './statistics.module.scss';

const Statistics = (props) => {
  const { chartMode, onChangeMode, statistics, data } = props;

  return (
    <Box>
      <Grid container spacing={4}>
        <Metrics avgStat={statistics} />
        <Grid item xs={12}>
          <Paper className={styles.wrapper}>
            <Chart data={data} mode={chartMode} onChangeMode={onChangeMode} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Statistics;
