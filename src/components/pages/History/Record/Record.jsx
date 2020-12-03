import React, { useState } from 'react';
import classnames from 'classnames';
import { Box, Paper } from '@material-ui/core';
import Description from './Description/Description';
import Toolbar from './Toolbar/Toolbar';
import Statistics from './Statistics/Statistics';

import styles from './record.module.scss';

const Record = (props) => {
  const { storedResult, onDelete = () => {}, toggleFavorite = () => {} } = props;
  const [collapse, setCollapse] = useState(false);

  const toggleCollapse = () => {
    setCollapse((curr) => !curr);
  };

  return (
    <Paper className={styles.container}>
      <Box className={classnames(styles.prevue, { [styles.open]: !collapse })}>
        <Description
          algorithmName={storedResult.algorithm.name}
          environmentName={storedResult.environment.name}
          size={storedResult.surveyDataset.Size}
          date={storedResult.date}
        />
        <Toolbar
          favorite={storedResult.favorite}
          toggleFavorite={toggleFavorite.bind(storedResult.id)}
          onDelete={onDelete.bind(storedResult.id)}
          collapse={collapse}
          toggleCollapse={toggleCollapse}
        />
      </Box>
      {!collapse && (
        <Statistics
          surveyDataset={storedResult.surveyDataset}
          completeStatistics={storedResult.completeStatistics}
        />
      )}
    </Paper>
  );
};

export default Record;
