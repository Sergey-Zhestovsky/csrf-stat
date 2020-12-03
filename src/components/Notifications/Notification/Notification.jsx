import React, { useState, memo, useEffect } from 'react';
import classnames from 'classnames';
import { Slide, Paper, Box, Typography } from '@material-ui/core';

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';

import notificationTypes from '../../../data/notification-type.json';

import styles from './notification.module.scss';

const variants = {
  [notificationTypes.info]: styles.info,
  [notificationTypes.success]: styles.success,
  [notificationTypes.warn]: styles.warn,
  [notificationTypes.error]: styles.error,
};

const icons = {
  [notificationTypes.info]: InfoOutlinedIcon,
  [notificationTypes.success]: CheckCircleOutlinedIcon,
  [notificationTypes.warn]: ErrorOutlineOutlinedIcon,
  [notificationTypes.error]: ReportProblemOutlinedIcon,
};

const Notification = (props) => {
  const { notification, onClose = () => {} } = props;
  const [open, setOpen] = useState(true);
  const type = notification.type ?? notificationTypes.info;
  const Icon = icons[type] ?? InfoOutlinedIcon;

  useEffect(() => {
    const timeout = notification.timeout
      ? setTimeout(() => {
          setOpen(false);
        }, notification.timeout)
      : null;

    return () => {
      console.log('cleaning', timeout);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Slide
      direction="right"
      in={open}
      mountOnEnter
      appear
      unmountOnExit
      timeout={125}
      onExited={onClose.bind(null, notification.id)}
    >
      <Paper
        className={classnames(styles.container, variants[type])}
        elevation={5}
        onClick={() => setOpen(false)}
      >
        <Box className={styles.iconWrapper}>
          <Icon className={classnames(styles.icon, variants[type])} />
        </Box>
        <Box className={styles.context}>
          <Typography className={styles.title}>{notification.title}</Typography>
          {notification.message && <Typography>{notification.message}</Typography>}
        </Box>
      </Paper>
    </Slide>
  );
};

export default memo(Notification);
