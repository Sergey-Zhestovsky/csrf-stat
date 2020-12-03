import React from 'react';
import { Typography } from '@material-ui/core';
import VirtualTable from '../../../../utils/VirtualTable/VirtualTable';

import styles from './table.module.scss';

const Table = (props) => {
  const { rows = [] } = props;

  return (
    <>
      <VirtualTable
        rowCount={rows.length}
        rowGetter={({ index }) => rows[rows.length - 1 - index]}
        columns={[
          {
            label: '#',
            dataKey: 'position',
            width: 65,
          },
          {
            width: 130,
            label: 'Speed (ms)',
            dataKey: 'speed',
            numeric: true,
          },
          {
            width: 130,
            label: 'Delay (ms)',
            dataKey: 'delay',
            numeric: true,
          },
          {
            width: 130,
            label: 'Queue',
            dataKey: 'queue',
            numeric: true,
          },
          {
            width: 130,
            label: 'Load (mb)',
            dataKey: 'load',
            numeric: true,
          },
        ]}
        noRowsRenderer={() => (
          <Typography className={styles.empty} variant="h5">
            Empty
          </Typography>
        )}
      />
    </>
  );
};

export default Table;
