import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import Record from './Record/Record';
import SurveyDataset from '../../../api/models/SurveyDataset';
import SurveyStatistics from '../../../api/models/SurveyStatistics';

import styles from './history.module.scss';

const storedResult = {
  algorithm: {
    id: 1,
    name: 'Double cookies',
  },
  environment: {
    id: 1,
    name: 'Small',
  },
  surveyDataset: new SurveyDataset([]),
  completeStatistics: SurveyStatistics.completeStatistics([]),
  favorite: false,
  date: Date.now() - 2567,
};

const History = (props) => {
  const deleteHandler = (id) => {};
  const toggleFavorite = (id) => {};

  const getRecords = (num = 5) => {
    return new Array(num)
      .fill()
      .map((_, i) => (
        <Record
          key={i}
          storedResult={storedResult}
          onDelete={deleteHandler}
          toggleFavorite={toggleFavorite}
        />
      ));
  };

  return (
    <Container>
      <Box className={styles.titleContainer}>
        <Typography className={styles.title}>History</Typography>
      </Box>
      <Box>{getRecords(1)}</Box>
    </Container>
  );
};

export default History;
