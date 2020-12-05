import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { Container, Box, Typography } from '@material-ui/core';

import styles from './footer.module.scss';

const Footer = (props) => {
  return (
    <Box className={styles.wrapper}>
      <Container>
        <Box className={classnames(styles.row, styles.cols)}>
          <Box className={classnames(styles.col, styles.imgCol)}>
            <Box className={styles.imgWrapper}>
              <img className={styles.img} src="/img/logos/back.png" />
            </Box>
          </Box>
          <Box className={styles.col}>
            <Typography className={styles.colTitle}>CSRF Testing Lab</Typography>
            <Typography className={styles.about}>
              This project was created for testing client-server interaction protection algorithms
              against CSRF attacks. Testing suits includes up to 8 working protection algorithms and
              5 main environment simulation for testing purposes. All methodology and philosophy
              behind that are described in corresponding master's work.
            </Typography>
            <Typography className={styles.about}>
              All requests are sent to the local server side to the appropriate endpoints, where
              requests are processed and returned with corresponding statistics.
            </Typography>
            <Typography className={styles.contacts}>Sergey.Zhestovsky@gmail.com</Typography>
          </Box>
          <Box className={styles.col}>
            <Typography className={classnames(styles.colTitle, styles.navTitle)}>
              Navigation
            </Typography>
            <Box component="nav" className={styles.nav}>
              <NavLink to="/survey" className={styles.link} activeClassName={styles.active}>
                Survey
              </NavLink>
              <NavLink to="/history" className={styles.link} activeClassName={styles.active}>
                History
              </NavLink>
            </Box>
          </Box>
        </Box>
        <Box className={classnames(styles.row, styles.copyrightRow)}>
          <Typography className={styles.copyright}>© Sergey Zhestovsky, 2020</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
