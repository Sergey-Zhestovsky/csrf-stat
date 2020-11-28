import React, { useState } from 'react';
import Menu, { actionStates, actions } from './Menu/Menu';
import DataView, { chartModes } from './DataView/DataView';

const algorithmList = [
  {
    id: 1,
    name: 'Double cookies',
  },
  {
    id: 2,
    name: 'Encrypted token',
  },
  {
    id: 3,
    name: 'Authorization header',
  },
  {
    id: 4,
    name: 'Secure cookies',
  },
  {
    id: 5,
    name: 'Form signing',
  },
  {
    id: 6,
    name: 'Domain table',
  },
  {
    id: 7,
    name: 'Client intermediary',
  },
  {
    id: 8,
    name: 'Transmission assurance',
  },
];

const environments = [
  {
    id: 1,
    name: 'Small',
  },
  {
    id: 2,
    name: 'Big',
  },
  {
    id: 3,
    name: 'Mixed',
  },
  {
    id: 4,
    name: 'Logic',
  },
  {
    id: 5,
    name: 'Real',
  },
];

const surveyResults = [
  {
    id: 1,
    time: 0.12553,
    delay: 0.12553,
    queue: 0.12553,
    load: 0.12553,
  },
];

const chartData = [
  [1, 5],
  [2, 8],
  [3, 45],
  [4, 12],
  [5, 46],
  [6, 32],
];

const avgStat = {
  speed: 123,
  delay: 341,
  queue: 12,
  load: 723,
};

const Survey = (props) => {
  const chosen = 1;
  const tr = new Array(100).fill(surveyResults[0]);

  return (
    <>
      <Menu
        algorithmList={algorithmList}
        currentAlgorithm={1}
        onAlgorithmChange={() => null}
        environmentList={environments}
        currentEnvironment={1}
        onEnvironmentChange={() => null}
        currentActionState={actionStates.started}
        withResults={false}
        onActinChange={() => null}
      />
      <DataView
        results={tr}
        chartData={chartData}
        statistic={avgStat}
        title={algorithmList[0].name}
        chartMode={chartModes.speed}
        onChangeChartMode={() => null}
      />
    </>
  );
};

export default Survey;
