import React from 'react';
import { Container, Box } from '@material-ui/core';
import Table from './Table/Table';
import Statistics from './Statistics/Statistics';

import styles from './data-view.module.scss';

const DataView = (props) => {
  const { results = [], statistic } = props;

  return (
    <Container className={styles.wrapper}>
      <Box className={styles.col}>
        <Table rows={results} />
      </Box>
      <Box className={styles.col}>
        <Statistics data={statistic} rowResult={results} />
      </Box>
    </Container>
  );
};

export default DataView;
