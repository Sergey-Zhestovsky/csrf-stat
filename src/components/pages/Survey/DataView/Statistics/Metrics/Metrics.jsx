import React from 'react';
import Card from './Card/Card';

const Metrics = (props) => {
  const { avgStat } = props;

  return (
    <>
      <Card name="Average speed" value={avgStat.avgSeed} />
      <Card name="Average delay" value={avgStat.avgDelay} />
      <Card name="Average queue" value={avgStat.avgQueue} />
      <Card name="Average load" value={avgStat.avgLoad} />
    </>
  );
};

export default Metrics;
