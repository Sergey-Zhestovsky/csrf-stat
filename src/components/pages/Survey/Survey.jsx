import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import Menu, { actionStates, actions } from './Menu/Menu';
import DataView from './DataView/DataView';
import HistoryService from '../../../api/services/HistoryService';
import QueryService from '../../../api/services/QueryService';
import { rootActions } from '../../../api/storage';
import chartModes from '../../../data/chart-modes.json';
import { list as algorithmList } from '../../../data/algorithms.json';
import { list as environmentList } from '../../../data/environments.json';

const {
  testSuiteActions: { useActions },
} = rootActions;

const Survey = (props) => {
  const { algorithm, environment, surveyDataset } = useSelector((state) => state.testSuite);
  const { setAlgorithm, setEnvironment, append, clear } = useActions();

  const [chartMode, setChartMode] = useState(chartModes.speed);
  const [currentActionState, setCurrentActionState] = useState(actionStates.notStarted);
  const [saved, setSaved] = useState(true);

  const memorizedChartData = useMemo(() => surveyDataset.getChartData(chartMode), [
    surveyDataset.dataset,
    chartMode,
  ]);

  const queryService = useMemo(() => new QueryService(algorithm.id, environment.id), [
    algorithm,
    environment,
  ]);

  const start = () => {
    setSaved(false);
    queryService.start(append);
    setCurrentActionState(actionStates.started);
  };

  const pause = () => {
    queryService.stop();
    setCurrentActionState(actionStates.paused);
  };

  const stop = () => {
    queryService.stop();
    setCurrentActionState(actionStates.stopped);
  };

  const saveData = () => {
    HistoryService.save(algorithm, environment, surveyDataset);
    setSaved(true);
  };

  const cleanData = () => {
    clear();
    setCurrentActionState(actionStates.notStarted);
  };

  const handleChangeAction = (action) => {
    switch (action) {
      case actions.start:
        return start();
      case actions.pause:
        return pause();
      case actions.stop:
        return stop();
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
        currentAlgorithm={algorithm.id}
        onAlgorithmChange={setAlgorithm}
        environmentList={environmentList}
        currentEnvironment={environment.id}
        onEnvironmentChange={setEnvironment}
        currentActionState={currentActionState}
        withResults={!surveyDataset.isEmpty()}
        onActinChange={handleChangeAction}
        saved={saved}
        disabled={currentActionState !== actionStates.notStarted}
      />
      <DataView
        results={surveyDataset.dataset}
        chartData={memorizedChartData}
        statistic={surveyDataset.statistics}
        title={algorithm.name}
        subtitle={environment.name}
        chartMode={chartMode}
        onChangeChartMode={setChartMode}
      />
    </>
  );
};

export default Survey;
