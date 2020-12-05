import React, { useMemo, useState, useEffect } from 'react';
import { Button, FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import Selector from './Selector/Selector';
import { list as algorithmList } from '../../../../../data/algorithms.json';
import { list as environmentList } from '../../../../../data/environments.json';

import styles from './filter.module.scss';

const getSelectList = (list) => {
  return list.map((el) => ({
    value: el.id,
    name: el.name,
  }));
};

const Filters = (props) => {
  const { onFilter = () => {} } = props;

  const [algorithm, setAlgorithm] = useState('');
  const [environment, setEnvironment] = useState('');
  const [favorite, setFavorite] = useState(false);

  const memoedAlgorithms = useMemo(() => getSelectList(algorithmList), [algorithmList]);
  const memoedEnvironments = useMemo(() => getSelectList(environmentList), [environmentList]);

  useEffect(() => {
    if (algorithm === '' && environment === '' && favorite === false) return onFilter(null);
    return onFilter({
      algorithm: algorithm !== '' ? algorithm : null,
      environment: environment !== '' ? environment : null,
      favorite,
    });
  }, [algorithm, environment, favorite]);

  const cancelHandler = () => {
    setAlgorithm('');
    setEnvironment('');
    setFavorite(false);
  };

  return (
    <FormGroup row className={styles.container}>
      <Button className={styles.cancel} onClick={cancelHandler}>
        cancel
      </Button>
      <Selector
        label="Algorithm"
        value={algorithm}
        values={memoedAlgorithms}
        onChange={setAlgorithm}
        withEmpty
      />
      <Selector
        label="Environment"
        value={environment}
        values={memoedEnvironments}
        onChange={setEnvironment}
        withEmpty
      />
      <FormControlLabel
        control={
          <Switch
            checked={favorite}
            onChange={(event) => setFavorite(event.target.checked)}
            name="favorite"
            color="primary"
          />
        }
        label="Favorite"
      />
    </FormGroup>
  );
};

export default Filters;
