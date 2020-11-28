import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import Table from './Table/Table';
import Statistics from './Statistics/Statistics';

import styles from './data-view.module.scss';

const DataView = (props) => {
  const {
    results = [],
    chartData = [],
    statistic = {},
    title,
    chartMode,
    onChangeChartMode,
  } = props;

  return (
    <Container>
      <Typography className={styles.title}>{title}</Typography>
      <Box className={styles.wrapper}>
        <Box className={styles.col}>
          <Table rows={results} />
        </Box>
        <Box className={styles.col}>
          <Statistics
            chartMode={chartMode}
            onChangeMode={onChangeChartMode}
            statistics={statistic}
            data={chartData}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default DataView;
