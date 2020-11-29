import React from 'react';
import {
  Table as MaterialTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
} from '@material-ui/core';
import { AutoSizer, Column, Table as VirtualTable } from 'react-virtualized';

import styles from './table.module.scss';
import 'react-virtualized/styles.css';

const Table = (props) => {
  const { rows = [] } = props;
  const isEmpty = rows.length === 0;

  const getRows = (tRows = []) => {
    return tRows.map((row, i) => {
      return (
        <TableRow hover tabIndex={-1} key={row.id}>
          <TableCell>{i + 1}</TableCell>
          <TableCell>{row.speed}</TableCell>
          <TableCell>{row.delay}</TableCell>
          <TableCell>{row.queue}</TableCell>
          <TableCell>{row.load}</TableCell>
        </TableRow>
      );
    });
  };

  return (
    <>
      <AutoSizer>
        {({ height, width }) => (
          <VirtualTable
            height={height}
            width={width}
            gridStyle={{ direction: 'inherit' }}
            headerHeight={20}
            rowHeight={30}
            rowCount={rows.length}
            rowGetter={({ index }) => rows[index]}
            className="MuiTable-root MuiTable-stickyHeader"
            headerClassName="MuiTableHead-root"
            rowClassName="MuiTableRow-root"
          >
            {/* <Column label="#" dataKey="i" cellDataGetter={()} /> */}
            <Column
              label="Speed"
              dataKey="speed"
              headerRenderer={({ label }) => <TableCell variant="head">{label}</TableCell>}
              cellRenderer={({ cellData }) => <TableCell variant="body">{cellData}</TableCell>}
            />
            <Column
              label="Delay"
              dataKey="delay"
              headerRenderer={({ label }) => <TableCell variant="head">{label}</TableCell>}
              cellRenderer={({ cellData }) => <TableCell variant="body">{cellData}</TableCell>}
            />
            <Column
              label="Queue"
              dataKey="queue"
              headerRenderer={({ label }) => <TableCell variant="head">{label}</TableCell>}
              cellRenderer={({ cellData }) => <TableCell variant="body">{cellData}</TableCell>}
            />
            <Column
              label="Load"
              dataKey="load"
              headerRenderer={({ label }) => <TableCell variant="head">{label}</TableCell>}
              cellRenderer={({ cellData }) => <TableCell variant="body">{cellData}</TableCell>}
            />
          </VirtualTable>
        )}
      </AutoSizer>
      {/* <Box className={styles.wrapper}>
        <TableContainer className={styles.container}>
          <MaterialTable stickyHeader size="small">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Speed</TableCell>
                <TableCell>Delay</TableCell>
                <TableCell>Queue</TableCell>
                <TableCell>Load</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{!isEmpty && getRows(rows)}</TableBody>
          </MaterialTable>
          {isEmpty && (
            <Typography className={styles.empty} variant="h5">
              Empty
            </Typography>
          )}
        </TableContainer>
      </Box> */}
    </>
  );
};

export default Table;
