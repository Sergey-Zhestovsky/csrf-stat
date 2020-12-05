import React, { useMemo, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Menu, { actions } from './Menu/Menu';
import DataView from './DataView/DataView';
import HistoryService from '../../../api/services/HistoryService';
import QueryService from '../../../api/services/QueryService';
import { rootActions } from '../../../api/storage';
import chartModes from '../../../data/chart-modes.json';
import { list as algorithmList } from '../../../data/algorithms.json';
import { list as environmentList } from '../../../data/environments.json';
import actionStates from '../../../data/test-action-states.json';

const {
  testSuiteActions: { useTestSuiteActions },
  notificationActions: { useNotificationActions },
} = rootActions;

const Survey = (props) => {
  const { algorithm, environment, surveyDataset, actionState } = useSelector(
    (state) => state.testSuite
  );
  const { setAlgorithm, setEnvironment, append, clear, setActionState } = useTestSuiteActions();
  const { add: addNotification } = useNotificationActions();

  const [chartMode, setChartMode] = useState(chartModes.speed);
  const [saved, setSaved] = useState(true);
  const [queryServiceInstance] = useState(new QueryService());

  const memorizedChartData = useMemo(() => surveyDataset.getChartData(chartMode), [
    surveyDataset.dataset,
    chartMode,
  ]);

  const queryService = useMemo(() => queryServiceInstance.recreate(algorithm.id, environment.id), [
    algorithm,
    environment,
  ]);

  const errorStop = (error) => {
    queryService.stop();
    setActionState(actionStates.stopped);
    addNotification({
      title: 'Query error occurred while requesting to the server',
      type: 'error',
    });
  };

  const start = () => {
    setSaved(false);
    queryService.start(append, errorStop);
    setActionState(actionStates.started);
  };

  const pause = () => {
    queryService.stop();
    setActionState(actionStates.paused);
  };

  const stop = () => {
    queryService.stop();
    setActionState(actionStates.stopped);
  };

  const saveData = async () => {
    const id = await HistoryService.save(algorithm, environment, surveyDataset);
    if (id) {
      addNotification({ title: 'Test suite successfully saved', type: 'success' });
      setSaved(true);
    } else {
      addNotification({ title: 'Error occurred while saving results', type: 'error' });
    }
  };

  const cleanData = () => {
    clear();
    setActionState(actionStates.notStarted);
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

  useEffect(() => {
    return () => {
      if (actionState === actionStates.started) pause();
    };
  }, []);

  return (
    <>
      <Menu
        algorithmList={algorithmList}
        currentAlgorithm={algorithm.id}
        onAlgorithmChange={setAlgorithm}
        environmentList={environmentList}
        currentEnvironment={environment.id}
        onEnvironmentChange={setEnvironment}
        currentActionState={actionState}
        withResults={!surveyDataset.isEmpty()}
        onActinChange={handleChangeAction}
        saved={saved}
        disabled={actionState !== actionStates.notStarted}
      />
      <DataView
        results={surveyDataset.dataset}
        statistic={surveyDataset.statistics || {}}
        title={algorithm.name}
        subtitle={environment.name}
        chartData={memorizedChartData}
        chartMode={chartMode}
        onChangeChartMode={setChartMode}
      />
    </>
  );
};

export default Survey;
