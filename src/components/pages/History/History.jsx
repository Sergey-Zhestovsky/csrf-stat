import React, { useState, useEffect } from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import Record from './Record/Record';
import { rootActions } from '../../../api/storage';
import HistoryService from '../../../api/services/HistoryService';

import styles from './history.module.scss';

const {
  notificationActions: { useNotificationActions },
} = rootActions;

const History = (props) => {
  const [prevues, setPrevues] = useState([]);
  const { add: addNotification } = useNotificationActions();

  useEffect(() => {
    HistoryService.getPreview().then(setPrevues);
  }, []);

  const deleteHandler = async (id) => {
    const result = HistoryService.delete(id);
    if (result) {
      addNotification({ title: 'Test suite successfully deleted', type: 'success' });
      setPrevues(await HistoryService.getPreview());
    } else {
      addNotification({ title: 'Removing test suite successfully failed', type: 'error' });
    }
  };

  const toggleFavorite = async (id) => {
    const prevue = prevues.find((prevue) => prevue.id === id);
    let result = false;

    if (prevue) {
      if (prevue.favorite) result = await HistoryService.removeFromFavorite(id);
      else result = await HistoryService.addToFavorite(id);
      if (result) setPrevues(await HistoryService.getPreview());
    }
  };

  const getRecords = (prevueList) => {
    return prevueList
      .map((prevue) => (
        <Record
          key={prevue.id}
          prevue={prevue}
          onDelete={deleteHandler}
          toggleFavorite={toggleFavorite}
        />
      ))
      .reverse();
  };

  return (
    <Container>
      <Box className={styles.titleContainer}>
        <Typography className={styles.title}>History</Typography>
      </Box>
      <Box>{getRecords(prevues)}</Box>
    </Container>
  );
};

export default History;
