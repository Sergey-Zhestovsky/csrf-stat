import React from 'react';
import { Typography, Box, Grid, Paper } from '@material-ui/core';

import styles from './card.module.scss';

const Card = (props) => {
  const { name, value } = props;

  const prepareValue = (val) => {
    const v = parseFloat(val);
    return Math.round(v * 100) / 100;
  };

  return (
    <Grid item xs={6}>
      <Paper className={styles.label}>
        <Typography className={styles.title}>{name}:</Typography>
        <Typography>{prepareValue(value)}</Typography>
      </Paper>
    </Grid>
  );
};

export default Card;
