import React from 'react';
import { Box, Paper, Grid } from '@material-ui/core';
import { Chart as ReactChart } from 'react-charts';
import ChartController from './ChartController/ChartController';

import styles from './chart.module.scss';

const series = { type: 'bar' };
const getSeriesStyle = () => ({ color: '#f50357' });
const axes = [
  {
    primary: true,
    type: 'ordinal',
    position: 'bottom',
    show: false,
    outerPadding: 0,
    innerPadding: 0,
  },
  { position: 'left', type: 'linear', stacked: true },
];

const Chart = (props) => {
  const { data = [], mode, onChangeMode } = props;

  return (
    <Grid item xs={12}>
      <Paper className={styles.wrapper}>
        <Box className={styles.chart}>
          <ReactChart
            data={[{ data }]}
            series={series}
            axes={axes}
            getSeriesStyle={getSeriesStyle}
          />
        </Box>
        <Box className={styles.buttonGroupWrapper}>
          <ChartController mode={mode} onChange={onChangeMode} />
        </Box>
      </Paper>
    </Grid>
  );
};

export default Chart;
