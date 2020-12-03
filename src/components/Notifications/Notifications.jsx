import React, { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import Notification from './Notification/Notification';
import { rootActions } from '../../api/storage';

import styles from './notifications.module.scss';

const {
  notificationActions: { useNotificationActions },
} = rootActions;

const Notifications = (props) => {
  const { list } = useSelector((state) => state.notification);
  const { remove } = useNotificationActions();

  const closeHandler = useCallback(remove, []);

  const getNotifications = (notifications = []) => {
    return notifications.map((n) => (
      <Notification key={n.id} notification={n} onClose={closeHandler} />
    ));
  };

  return <Box className={styles.container}>{getNotifications(list)}</Box>;
};

export default Notifications;
