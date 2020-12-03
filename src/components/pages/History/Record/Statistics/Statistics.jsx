import React, { useState, useMemo } from 'react';
import classnames from 'classnames';
import { Box } from '@material-ui/core';
import Metrics from './Metrics/Metrics';
import Chart from '../../../../utils/Chart/Chart';
import chartModes from '../../../../../data/chart-modes.json';

import styles from './statistics.module.scss';

const Statistics = (props) => {
  const { surveyDataset, completeStatistics } = props;
  const [chartMode, setChartMode] = useState(chartModes.speed);

  const memorizedChartData = useMemo(() => surveyDataset.getChartData(chartMode), [
    surveyDataset.dataset,
    chartMode,
  ]);

  return (
    <Box className={styles.wrapper}>
      <Box className={styles.col}>
        <Metrics completeStatistics={completeStatistics} />
      </Box>
      <Box className={classnames(styles.col, styles.centered)}>
        <Chart
          data={memorizedChartData}
          mode={chartMode}
          onChangeMode={setChartMode}
          withOffButton={false}
        />
      </Box>
    </Box>
  );
};

export default Statistics;
