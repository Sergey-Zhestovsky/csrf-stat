import React from 'react';
import classnames from 'classnames';
import { IconButton, Tooltip } from '@material-ui/core';

import styles from './action-button.module.scss';

const ActionButton = (props) => {
  const { icon: Icon, tooltip, actionState, currentState } = props;
  const isActive = actionState === currentState;

  return (
    <Tooltip title={tooltip}>
      <IconButton className={classnames(styles.actionButton, { [styles.active]: isActive })} disabled={isActive}>
        <Icon />
      </IconButton>
    </Tooltip>
  );
};

export default ActionButton;
