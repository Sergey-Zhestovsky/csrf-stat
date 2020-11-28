import React from 'react';
import classnames from 'classnames';
import { Button, Box, Typography } from '@material-ui/core';

import styles from './environment-tabs.module.scss';

const EnvironmentTabs = (props) => {
  const { environmentList = [], environment, onChange = () => {} } = props;

  const getTabs = (list, activeEl, changeHandler) => {
    return list.map((el) => (
      <Button
        key={el.id}
        className={classnames(styles.environment, {
          [styles.active]: activeEl === el.id,
        })}
        disabled={activeEl === el.id}
        onClick={changeHandler.bind(null, el.id)}
      >
        {el.name}
      </Button>
    ));
  };

  return (
    <Box className={styles.environmentWrapper}>
      <Typography>Environment:</Typography>
      {getTabs(environmentList, environment, onChange)}
    </Box>
  );
};

export default EnvironmentTabs;
