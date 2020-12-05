import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@material-ui/core';

import styles from './header.module.scss';

const Header = (props) => {
  const { location } = props;

  return (
    <AppBar className={styles.header} color="transparent" position="relative">
      <Toolbar>
        <Typography className={styles.title} variant="h6">
          CSRF Testing Lab
        </Typography>

        <Tabs className={styles.tabs} variant="fullWidth" textColor="secondary" value={location.pathname}>
          <Tab className={styles.tab} label="Survey" value="/survey" component={Link} to="/survey" />
          <Tab className={styles.tab} label="History" value="/history" component={Link} to="/history" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);
