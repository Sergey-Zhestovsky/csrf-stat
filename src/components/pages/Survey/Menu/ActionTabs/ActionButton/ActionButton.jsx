import React from 'react';
import classnames from 'classnames';
import { IconButton, Tooltip } from '@material-ui/core';

import styles from './action-button.module.scss';

const ActionButton = (props) => {
  const {
    icon: Icon = () => {},
    tooltip,
    active = false,
    disabled = false,
    onClick = () => {},
  } = props;

  return (
    <Tooltip title={tooltip}>
      <IconButton
        className={classnames(styles.actionButton, {
          [styles.active]: active,
        })}
        disabled={disabled}
        onClick={onClick}
      >
        <Icon />
      </IconButton>
    </Tooltip>
  );
};

export default ActionButton;
