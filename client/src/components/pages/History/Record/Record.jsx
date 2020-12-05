import React, { useState } from 'react';
import classnames from 'classnames';
import { Box, Paper, Collapse } from '@material-ui/core';
import Description from './Description/Description';
import Toolbar from './Toolbar/Toolbar';
import Statistics from './Statistics/Statistics';
import HistoryService from '../../../../api/services/HistoryService';

import styles from './record.module.scss';

const Record = (props) => {
  const { prevue, onDelete = () => {}, toggleFavorite = () => {} } = props;

  const [collapse, setCollapse] = useState(true);
  const [storedResult, setStoredResult] = useState(null);

  const dataLoading = !collapse && !storedResult;
  const open = !collapse && !!storedResult;

  const toggleCollapse = async () => {
    setCollapse((curr) => !curr);

    if (collapse === true && !storedResult) {
      const data = await HistoryService.get(prevue.id);
      if (data) setStoredResult(data);
      else setCollapse(false);
    }
  };

  return (
    <Paper className={styles.container}>
      <Box className={classnames(styles.prevue, { [styles.open]: open })}>
        <Description
          algorithmName={prevue.algorithm.name}
          environmentName={prevue.environment.name}
          size={prevue.samples}
          date={prevue.date}
        />
        <Toolbar
          favorite={prevue.favorite}
          toggleFavorite={toggleFavorite.bind(null, prevue.id)}
          onDelete={onDelete.bind(null, prevue.id)}
          dataLoading={dataLoading}
          collapse={collapse}
          toggleCollapse={toggleCollapse}
        />
      </Box>
      <Collapse in={open} mountOnEnter appear unmountOnExit timeout={500}>
        {storedResult && (
          <Statistics
            surveyDataset={storedResult.surveyDataset}
            completeStatistics={storedResult.completeStatistics}
          />
        )}
      </Collapse>
    </Paper>
  );
};

export default Record;
