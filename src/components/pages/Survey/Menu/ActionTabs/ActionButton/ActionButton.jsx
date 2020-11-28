import React from 'react';
import classnames from 'classnames';
import { IconButton, Tooltip, Box } from '@material-ui/core';

import styles from './action-button.module.scss';

const ActionButton = (props) => {
  const {
    icon: Icon = () => {},
    tooltip,
    active = false,
    disabled = false,
    onClick = () => {},
    animation = false,
  } = props;

  return (
    <Tooltip title={tooltip}>
      <Box className={styles.buttonWrapper}>
        <IconButton
          className={classnames(styles.actionButton, {
            [styles.active]: active,
          })}
          disabled={disabled}
          onClick={onClick}
          disableTouchRipple={!animation}
        >
          <Icon />
        </IconButton>
      </Box>
    </Tooltip>
  );
};

export default ActionButton;
