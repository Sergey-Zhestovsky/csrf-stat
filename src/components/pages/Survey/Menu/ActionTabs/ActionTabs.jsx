import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { PlayArrow, Stop, Pause, Save, Close } from '@material-ui/icons';
import Alert from '../../../../parts/Alert/Alert';
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
  const { actionState, withResults, onChange = () => {}, saved } = props;
  const [restartAlert, setRestartAlert] = useState(false);
  const [clearAlert, setClearAlert] = useState(false);

  const restartHandler = (answer) => {
    setRestartAlert(false);
    if (answer) {
      onChange(actions.clean);
      onChange(actions.start);
    }
  };

  const clearHandler = (answer) => {
    setClearAlert(false);
    if (answer) onChange(actions.clean);
  };

  const startHandler = () => {
    if (actionState !== actionStates.stopped || !withResults) return onChange(actions.start);
    return setRestartAlert(true);
  };

  const saveHandler = () => {
    if (saved) return;
    if (actionState === actionStates.started) onChange(actions.pause);
    onChange(actions.save);
  };

  const cleanHandler = () => {
    if (saved) return onChange(actions.clean);
    if (actionState === actionStates.started) onChange(actions.pause);
    setClearAlert(true);
  };

  return (
    <>
      <Box className={styles.actionsWrapper}>
        <ActionButton
          icon={PlayArrow}
          tooltip="Start"
          active={actionStates.started === actionState}
          disabled={actionStates.started === actionState}
          onClick={startHandler}
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
          disabled={!withResults && !saved}
          animation={true}
          onClick={saveHandler}
        />
        <ActionButton
          icon={Close}
          tooltip="Drop result"
          disabled={!withResults}
          animation={true}
          onClick={cleanHandler}
        />
      </Box>
      <Alert
        open={restartAlert}
        onClose={restartHandler}
        title="Restart test suite"
        message="It will delete all unsaved test results."
      />
      <Alert
        open={clearAlert}
        onClose={clearHandler}
        title="Drop current test suite"
        message="It will delete all unsaved test results and drop current test suite."
      />
    </>
  );
};

export default ActionTabs;
