import React from 'react';
import moment from 'moment';
import { Box } from '@material-ui/core';
import Label from './Label/Label';

import styles from './describe.module.scss';

const Description = (props) => {
  const { algorithmName, environmentName, size, date } = props;
  const mDate = moment(date);

  return (
    <Box className={styles.wrapper}>
      <Label title="Algorithm" value={algorithmName} />
      <Label title="Environment" value={environmentName} />
      <Label title="Samples" value={size} />
      <Label
        title="Date"
        value={mDate.fromNow()}
        tooltip={mDate.format('MMMM DD YYYY, HH:mm:ss')}
      />
    </Box>
  );
};

export default Description;
