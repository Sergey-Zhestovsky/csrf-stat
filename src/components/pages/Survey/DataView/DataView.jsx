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
    subtitle,
    chartMode,
    onChangeChartMode,
  } = props;

  return (
    <Container>
      <Box className={styles.titleContainer}>
        <Typography className={styles.title}>{title}</Typography>
        <Typography className={styles.subtitle}>{`<${subtitle}>`}</Typography>
      </Box>
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
