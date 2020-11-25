import React from 'react';
import { Typography, Box, Grid, Paper } from '@material-ui/core';
import Card from './Card/Card';

const Metrics = (props) => {
  const { avgStat } = props;

  return (
    <>
      <Card name="Average speed" value={avgStat.speed} />
      <Card name="Average delay" value={avgStat.delay} />
      <Card name="Average queue" value={avgStat.queue} />
      <Card name="Average load" value={avgStat.load} />
    </>
  );
};

export default Metrics;
