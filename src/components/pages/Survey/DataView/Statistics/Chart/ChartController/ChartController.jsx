import React from 'react';
import classnames from 'classnames';
import { ButtonGroup, Button } from '@material-ui/core';

import styles from './chart-controller.module.scss';

export const chartModes = {
  speed: 'speed',
  delay: 'delay',
  queue: 'queue',
  load: 'load',
};

const ChartController = (props) => {
  const { mode } = props;

  return (
    <ButtonGroup variant="outlined" color="primary">
      <Button
        className={classnames(styles.button, { [styles.active]: mode === chartModes.speed })}
        disabled={mode === chartModes.speed}
      >
        Speed
      </Button>

      <Button
        className={classnames(styles.button, { [styles.active]: mode === chartModes.delay })}
        disabled={mode === chartModes.delay}
      >
        Delay
      </Button>

      <Button
        className={classnames(styles.button, { [styles.active]: mode === chartModes.queue })}
        disabled={mode === chartModes.queue}
      >
        Queue
      </Button>

      <Button
        className={classnames(styles.button, { [styles.active]: mode === chartModes.load })}
        disabled={mode === chartModes.load}
      >
        Load
      </Button>
    </ButtonGroup>
  );
};

export default ChartController;
