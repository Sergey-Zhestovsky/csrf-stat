import React from 'react';
import { Box } from '@material-ui/core';
import { PlayArrow, Stop, Pause, Save, Close } from '@material-ui/icons';
import ActionButton from './ActionButton/ActionButton';

import styles from './action-tabs.module.scss';

export const actionStates = {
  notStarted: 'not started',
  started: 'started',
  paused: 'paused',
  stopped: 'stopped',
};

export const actions = {
  start: 'start',
  pause: 'pause',
  stop: 'stop',
  save: 'save',
  clean: 'clean',
};

const ActionTabs = (props) => {
  const { actionState, withResults, onChange = () => {} } = props;

  return (
    <Box className={styles.actionsWrapper}>
      <ActionButton
        icon={PlayArrow}
        tooltip="Start"
        active={actionStates.started === actionState}
        disabled={actionStates.started === actionState}
        onClick={onChange.bind(null, actions.start)}
      />
      <ActionButton
        icon={Pause}
        tooltip="Pause"
        active={actionStates.paused === actionState}
        disabled={actionStates.started !== actionState}
        onClick={onChange.bind(null, actions.pause)}
      />
      <ActionButton
        icon={Stop}
        tooltip="Stop"
        active={actionStates.stopped === actionState}
        disabled={actionStates.notStarted === actionState || actionStates.stopped === actionState}
        onClick={onChange.bind(null, actions.stop)}
      />
      <ActionButton
        icon={Save}
        tooltip="Save result"
        disabled={!withResults}
        animation={true}
        onClick={onChange.bind(null, actions.save)}
      />
      <ActionButton
        icon={Close}
        tooltip="Clear result"
        disabled={!withResults}
        animation={true}
        onClick={onChange.bind(null, actions.clean)}
      />
    </Box>
  );
};

export default ActionTabs;
