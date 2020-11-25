import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';

import styles from './footer.module.scss';

const Footer = (props) => {
  return (
    <Box className={styles.wrapper}>
      <Container>
        <Typography align="center">© Sergey Zhestovsky, 2020</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
