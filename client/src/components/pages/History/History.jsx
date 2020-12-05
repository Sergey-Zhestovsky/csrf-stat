import React, { useState, useEffect } from 'react';
import { Container, Box, Fade } from '@material-ui/core';
import Header from './Header/Header';
import Record from './Record/Record';
import Placeholder from './Placeholder/Placeholder';
import { rootActions } from '../../../api/storage';
import HistoryService from '../../../api/services/HistoryService';

const {
  notificationActions: { useNotificationActions },
} = rootActions;

const History = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [sourcePrevues, setSourcePrevues] = useState([]);
  const [prevues, setPrevues] = useState([]);
  const [filters, setFilters] = useState(null);
  const { add: addNotification } = useNotificationActions();

  const refresh = async () => {
    setSourcePrevues(await HistoryService.getPreview());
  };

  const deleteOne = async (id) => {
    const result = HistoryService.delete(id);
    if (result) {
      addNotification({ title: 'Test suite successfully deleted', type: 'success' });
      refresh();
    } else {
      addNotification({ title: 'Removing test suite successfully failed', type: 'error' });
    }
  };

  const deleteAll = async () => {
    const result = HistoryService.clear();

    if (result) {
      addNotification({ title: 'Test suites successfully deleted', type: 'success' });
      refresh();
    } else {
      addNotification({ title: 'Removing test suites successfully failed', type: 'error' });
    }
  };

  const toggleFavorite = async (id) => {
    const prevue = prevues.find((prevue) => prevue.id === id);
    let result = false;

    if (prevue) {
      if (prevue.favorite) result = await HistoryService.removeFromFavorite(id);
      else result = await HistoryService.addToFavorite(id);
      if (result) refresh();
    }
  };

  const filter = () => {
    if (!filters) return setPrevues(sourcePrevues);
    setPrevues(
      sourcePrevues.filter((p) => {
        if (filters.algorithm && p.algorithm.id !== filters.algorithm) return false;
        if (filters.environment && p.environment.id !== filters.environment) return false;
        if (filters.favorite && p.favorite !== filters.favorite) return false;
        return true;
      })
    );
  };

  useEffect(() => {
    filter();
  }, [filters, sourcePrevues]);

  useEffect(() => {
    const init = async () => {
      const result = await HistoryService.getPreview();
      setSourcePrevues(result);
      setPrevues(result);
      setLoaded(true);
    };

    init();
  }, []);

  const getRecords = (prevueList) => {
    return prevueList.map((prevue) => (
      <Record
        key={prevue.id}
        prevue={prevue}
        onDelete={deleteOne}
        toggleFavorite={toggleFavorite}
      />
    ));
  };

  return (
    <Fade in={loaded}>
      <Container>
        <Header
          withToolbar={sourcePrevues.length > 0}
          onDeleteAll={deleteAll}
          onRefresh={refresh}
          onFilter={setFilters}
        />
        <Box>{prevues.length > 0 ? getRecords(prevues) : <Placeholder icon={!filters} />}</Box>
      </Container>
    </Fade>
  );
};

export default History;
