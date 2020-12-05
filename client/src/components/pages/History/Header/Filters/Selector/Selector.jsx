import React, { useState } from 'react';
import classnames from 'classnames';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@material-ui/core';

import styles from './selector.module.scss';

const Selector = (props) => {
  const { label, value, values, onChange = () => {}, withEmpty = true } = props;

  const getOptions = (list = []) => {
    const result = list.map((el) => {
      return (
        <MenuItem key={el.value} value={el.value}>
          {el.name}
        </MenuItem>
      );
    });

    if (withEmpty || list.length === 0) {
      result.unshift(
        <MenuItem key={'none'} value="">
          None
        </MenuItem>
      );
    }

    return result;
  };

  return (
    <Box className={styles.container}>
      <Typography className={styles.label}>{label}</Typography>
      <FormControl className={styles.formControl}>
        <Select
          className={styles.select}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          displayEmpty
        >
          {getOptions(values)}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Selector;
