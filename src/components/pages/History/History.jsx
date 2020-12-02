import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import Record from './Record/Record';
import SurveyDataset from '../../../api/models/SurveyDataset';

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
  favorite: false,
  date: Date.now() - 2567,
};

const History = (props) => {
  const deleteHandler = (id) => {};
  const toggleFavorite = (id) => {};

  return (
    <Container>
      <Box className={styles.titleContainer}>
        <Typography className={styles.title}>History</Typography>
      </Box>
      <Box>
        <Record
          storedResult={storedResult}
          onDelete={deleteHandler}
          toggleFavorite={toggleFavorite}
        />
        <Record storedResult={storedResult} />
      </Box>
    </Container>
  );
};

export default History;
