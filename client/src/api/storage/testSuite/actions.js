import { useDispatch } from 'react-redux';
import { ACTIONS } from './reducer';
import { list as algorithmList } from '../../../data/algorithms.json';
import { list as environmentList } from '../../../data/environments.json';

export const setAlgorithm = (algorithmId) => {
  return (dispatch) => {
    dispatch({
      type: ACTIONS.SET_ALGORITHM,
      algorithm: algorithmList.find((alg) => alg.id === algorithmId),
    });
  };
};

export const setEnvironment = (environmentId) => {
  return (dispatch) => {
    dispatch({
      type: ACTIONS.SET_ENVIRONMENT,
      environment: environmentList.find((env) => env.id === environmentId),
    });
  };
};

export const setActionState = (actionState) => {
  return (dispatch) => {
    dispatch({
      type: ACTIONS.SET_ACTION_STATE,
      actionState,
    });
  };
};

export const append = (queryResult) => {
  return (dispatch) => {
    dispatch({
      type: ACTIONS.APPEND,
      result: queryResult,
    });
  };
};

export const clear = () => {
  return (dispatch) => {
    dispatch({
      type: ACTIONS.DROP_TEST,
    });
  };
};

export const useTestSuiteActions = () => {
  const dispatch = useDispatch();

  return {
    setAlgorithm: (algorithmId) => dispatch(setAlgorithm(algorithmId)),
    setEnvironment: (environmentId) => dispatch(setEnvironment(environmentId)),
    append: (queryResult) => dispatch(append(queryResult)),
    clear: () => dispatch(clear()),
    setActionState: (actionState) => dispatch(setActionState(actionState)),
  };
};
