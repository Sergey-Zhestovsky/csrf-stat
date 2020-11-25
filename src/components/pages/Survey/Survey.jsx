import React from 'react';
import Menu, { actionStates } from './Menu/Menu';
import DataView from './DataView/DataView';

const protectionMethods = [
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
    queue: 0.12553,
    load: 0.12553,
  },
];

const Survey = (props) => {
  return (
    <>
      <Menu
        methodsList={protectionMethods}
        method={1}
        environmentList={environments}
        environment={1}
        actionState={actionStates.started}
      />
      <DataView results={surveyResults} />
    </>
  );
};

export default Survey;
