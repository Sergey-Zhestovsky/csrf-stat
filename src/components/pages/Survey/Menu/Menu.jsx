import React from 'react';
import classnames from 'classnames';
import { Paper, Tabs, Tab, Container, Button, Box, Typography } from '@material-ui/core';
import { PlayArrow, Stop, Pause, Save, Close } from '@material-ui/icons';
import ActionButton from './ActionButton/ActionButton';

import styles from './menu.module.scss';

export const actionStates = {
  started: 'started',
  paused: 'paused',
  stopped: 'stopped',
};

const Menu = (props) => {
  const { methodsList, method, environmentList, environment, actionState } = props;

  const getMethodTabs = (list = []) => {
    return list.map((el) => <Tab key={el.id} className={styles.method} label={el.name} value={el.id} />);
  };

  const getEnvTabs = (list = [], activeEl) => {
    return list.map((el) => (
      <Button
        key={el.id}
        className={classnames(styles.environment, { [styles.active]: activeEl === el.id })}
        disabled={activeEl === el.id}
        onClick={() => null}
      >
        {el.name}
      </Button>
    ));
  };

  return (
    <Paper className={styles.main} elevation={0}>
      <Box className={styles.methodWrapper}>
        <Container>
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            aria-label="disabled tabs example"
            variant="scrollable"
            scrollButtons="auto"
            value={method}
          >
            {getMethodTabs(methodsList)}
          </Tabs>
        </Container>
      </Box>
      <Container className={styles.tools}>
        <Box className={styles.environmentWrapper}>
          <Typography>Environment:</Typography>
          {getEnvTabs(environmentList, environment)}
        </Box>
        <Box className={styles.actionsWrapper}>
          <ActionButton
            icon={PlayArrow}
            tooltip="Start"
            actionState={actionStates.started}
            currentState={actionState}
          />
          <ActionButton icon={Pause} tooltip="Pause" actionState={actionStates.paused} currentState={actionState} />
          <ActionButton icon={Stop} tooltip="Stop" actionState={actionStates.stopped} currentState={actionState} />
          <ActionButton
            icon={Save}
            tooltip="Save result"
            actionState={actionStates.stopped}
            currentState={actionState}
          />
          <ActionButton
            icon={Close}
            tooltip="Clear result"
            actionState={actionStates.stopped}
            currentState={actionState}
          />
        </Box>
      </Container>
    </Paper>
  );
};

export default Menu;
