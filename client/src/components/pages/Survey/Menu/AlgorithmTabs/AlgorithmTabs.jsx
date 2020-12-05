import React from 'react';
import { Typography, Tabs, Tab, Container, Box } from '@material-ui/core';

import styles from './algorithm-tabs.module.scss';

const AlgorithmTabs = (props) => {
  const { algorithmList = [], algorithm, onChange = () => {}, disabled = false } = props;

  const getTabs = (list, changeHandler, disabledTabs) => {
    return list.map((el) => (
      <Tab
        key={el.id}
        className={styles.method}
        label={el.name}
        value={el.id}
        onClick={changeHandler.bind(null, el.id)}
        disabled={disabledTabs}
      />
    ));
  };

  return (
    <Box className={styles.methodWrapper}>
      <Container className={styles.methodContainer}>
        <Typography>Algorithm:</Typography>
        <Tabs
          className={styles.tabs}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          value={algorithm}
        >
          {getTabs(algorithmList, onChange, disabled)}
        </Tabs>
      </Container>
    </Box>
  );
};

export default AlgorithmTabs;
