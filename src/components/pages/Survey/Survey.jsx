import React, { useMemo, useState } from 'react';
import Menu, { actionStates, actions } from './Menu/Menu';
import DataView from './DataView/DataView';
import SurveyDataset from '../../../api/models/SurveyDataset';
import chartModes from '../../../data/chart-modes.json';
import { list as algorithmList } from '../../../data/algorithms.json';
import { list as environmentList } from '../../../data/environments.json';

const getRandomResult = (id) => ({
  id,
  speed: Math.round(Math.random() * 40),
  delay: Math.round(Math.random() * 70),
  queue: Math.round(Math.random() * 23),
  load: Math.round(Math.random() * 250),
});

const Survey = (props) => {
  const [surveyDataset, setSurveyDataset] = useState(
    new SurveyDataset(new Array(25).fill().map(() => getRandomResult()))
  );
  const [chartMode, setChartMode] = useState(chartModes.speed);
  const [chosenAlgorithm, setChosenAlgorithm] = useState(algorithmList[0].id);
  const [chosenEnvironment, setChosenEnvironment] = useState(environmentList[0].id);
  const [currentActionState, setCurrentActionState] = useState(actionStates.notStarted);

  const memorizedChartData = useMemo(() => surveyDataset.getChartData(chartMode), [
    surveyDataset.dataset,
    chartMode,
  ]);

  const saveData = () => {};

  const cleanData = () => {
    setCurrentActionState(actionStates.notStarted);
  };

  const handleChangeAction = (action) => {
    switch (action) {
      case actions.start:
        return setCurrentActionState(actionStates.started);
      case actions.pause:
        return setCurrentActionState(actionStates.paused);
      case actions.stop:
        return setCurrentActionState(actionStates.stopped);
      case actions.save:
        return saveData();
      case actions.clean:
        return cleanData();
      default:
        return;
    }
  };

  return (
    <>
      <Menu
        algorithmList={algorithmList}
        currentAlgorithm={chosenAlgorithm}
        onAlgorithmChange={setChosenAlgorithm}
        environmentList={environmentList}
        currentEnvironment={chosenEnvironment}
        onEnvironmentChange={setChosenEnvironment}
        currentActionState={currentActionState}
        withResults={!surveyDataset.isEmpty()}
        onActinChange={handleChangeAction}
      />
      <DataView
        results={surveyDataset.dataset}
        chartData={memorizedChartData}
        statistic={surveyDataset.statistics}
        title={algorithmList[0].name}
        chartMode={chartMode}
        onChangeChartMode={setChartMode}
      />
    </>
  );
};

export default Survey;
