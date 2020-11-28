import React from 'react';
import { Typography, Tabs, Tab, Container, Box } from '@material-ui/core';

import styles from './algorithm-tabs.module.scss';

const AlgorithmTabs = (props) => {
  const { algorithmList = [], algorithm, onChange = () => {} } = props;

  const getTabs = (list, changeHandler) => {
    return list.map((el) => (
      <Tab
        key={el.id}
        className={styles.method}
        label={el.name}
        value={el.id}
        onClick={changeHandler.bind(null, el.id)}
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
          {getTabs(algorithmList, onChange)}
        </Tabs>
      </Container>
    </Box>
  );
};

export default AlgorithmTabs;
