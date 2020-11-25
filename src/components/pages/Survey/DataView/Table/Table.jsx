import React from 'react';
import {
  Table as MaterialTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';

import styles from './table.module.scss';

const Table = (props) => {
  const { rows } = props;
  const isEmpty = !rows || rows.length === 0;

  const getRows = (tRows = []) => {
    return tRows.map((row, i) => {
      return (
        <TableRow hover tabIndex={-1} key={row.id}>
          <TableCell>{i + 1}</TableCell>
          <TableCell>{row.time}</TableCell>
          <TableCell>{row.queue}</TableCell>
          <TableCell>{row.load}</TableCell>
        </TableRow>
      );
    });
  };

  return (
    <TableContainer className={styles.container}>
      <MaterialTable stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Queue</TableCell>
            <TableCell>Load</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{!isEmpty && getRows(new Array(100).fill(rows[0]))}</TableBody>
      </MaterialTable>
      {isEmpty && (
        <Typography className={styles.empty} variant="h5">
          Empty
        </Typography>
      )}
    </TableContainer>
  );
};

export default Table;
