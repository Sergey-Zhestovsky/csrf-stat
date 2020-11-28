import React from 'react';
import classnames from 'classnames';
import { ButtonGroup, Button } from '@material-ui/core';
import chartModes from '../../../../../../../data/chart-modes.json';

import styles from './chart-controller.module.scss';

const ChartController = (props) => {
  const { mode, onChange = () => {} } = props;

  return (
    <ButtonGroup variant="outlined" color="primary">
      <Button
        className={classnames(styles.button, { [styles.active]: mode === chartModes.speed })}
        disabled={mode === chartModes.speed}
        onClick={onChange.bind(null, chartModes.speed)}
      >
        Speed
      </Button>
      <Button
        className={classnames(styles.button, { [styles.active]: mode === chartModes.delay })}
        disabled={mode === chartModes.delay}
        onClick={onChange.bind(null, chartModes.delay)}
      >
        Delay
      </Button>

      <Button
        className={classnames(styles.button, { [styles.active]: mode === chartModes.queue })}
        disabled={mode === chartModes.queue}
        onClick={onChange.bind(null, chartModes.queue)}
      >
        Queue
      </Button>

      <Button
        className={classnames(styles.button, { [styles.active]: mode === chartModes.load })}
        disabled={mode === chartModes.load}
        onClick={onChange.bind(null, chartModes.load)}
      >
        Load
      </Button>
    </ButtonGroup>
  );
};

export default ChartController;
