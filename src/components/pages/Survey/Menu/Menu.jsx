import React from 'react';
import { Paper, Container } from '@material-ui/core';
import AlgorithmTabs from './AlgorithmTabs/AlgorithmTabs';
import EnvironmentTabs from './EnvironmentTabs/EnvironmentTabs';
import ActionTabs, { actionStates, actions } from './ActionTabs/ActionTabs';

import styles from './menu.module.scss';

const Menu = (props) => {
  const {
    algorithmList,
    currentAlgorithm,
    onAlgorithmChange,
    environmentList,
    currentEnvironment,
    onEnvironmentChange,
    currentActionState,
    withResults,
    onActinChange,
  } = props;

  return (
    <Paper className={styles.main} elevation={0}>
      <AlgorithmTabs
        algorithmList={algorithmList}
        algorithm={currentAlgorithm}
        onChange={onAlgorithmChange}
      />
      <Container className={styles.tools}>
        <EnvironmentTabs
          environmentList={environmentList}
          environment={currentEnvironment}
          onChange={onEnvironmentChange}
        />
        <ActionTabs
          actionState={currentActionState}
          withResults={withResults}
          onChange={onActinChange}
        />
      </Container>
    </Paper>
  );
};

export default Menu;
export { actionStates, actions };
