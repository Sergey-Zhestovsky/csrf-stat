import React from 'react';
import { Box, Paper, Grid } from '@material-ui/core';
import { Chart as ReactChart } from 'react-charts';

import styles from './chart.module.scss';

const Chart = (props) => {
  const { data = [] } = props;

  const memData = React.useMemo(() => [{ data }], [data]);
  const series = React.useMemo(() => ({ type: 'bar' }), []);
  const getSeriesStyle = React.useCallback(() => ({ color: '#3f51b5' }), []);
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom', show: false, outerPadding: 0, innerPadding: 0 },
      { position: 'left', type: 'linear', stacked: true },
    ],
    []
  );

  return (
    <Grid item xs={12}>
      <Paper className={styles.wrapper}>
        <Box className={styles.chart}>
          <ReactChart data={memData} series={series} axes={axes} getSeriesStyle={getSeriesStyle} />
        </Box>
      </Paper>
    </Grid>
  );
};

export default Chart;
