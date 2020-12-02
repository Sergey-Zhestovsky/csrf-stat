import React, { useState } from 'react';
import moment from 'moment';
import { Box, Paper } from '@material-ui/core';
import DescriptionLabel from './Description/Label/Label';
import Description from './Description/Description';
import Toolbar from './Toolbar/Toolbar';

import styles from './record.module.scss';

const Record = (props) => {
  const { storedResult, onDelete = () => {}, toggleFavorite = () => {} } = props;
  const [collapse, setCollapse] = useState(true);

  const toggleCollapse = () => {
    setCollapse((curr) => !curr);
  };

  return (
    <Paper className={styles.container}>
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
    </Paper>
  );
};

export default Record;
