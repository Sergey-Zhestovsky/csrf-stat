import SurveyDataset from '../../models/SurveyDataset';
import { list as algorithmList } from '../../../data/algorithms.json';
import { list as environmentList } from '../../../data/environments.json';
import actionStates from '../../../data/test-action-states.json';

export const ACTIONS = {
  SET_ALGORITHM: 'TEST_SUITE::SET_ALGORITHM',
  SET_ENVIRONMENT: 'TEST_SUITE::SET_ENVIRONMENT',
  SET_ACTION_STATE: 'TEST_SUITE::SET_ACTION_STATE',
  APPEND: 'TEST_SUITE::APPEND',
  DROP_TEST: 'TEST_SUITE::DROP_TEST',
};

const initialState = {
  algorithm: algorithmList[0],
  environment: environmentList[0],
  surveyDataset: new SurveyDataset([]),
  actionState: actionStates.notStarted,
};

const testSuiteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_ALGORITHM:
      return {
        ...state,
        algorithm: action.algorithm,
      };
    case ACTIONS.SET_ENVIRONMENT:
      return {
        ...state,
        environment: action.environment,
      };
    case ACTIONS.SET_ACTION_STATE:
      return {
        ...state,
        actionState: action.actionState,
      };
    case ACTIONS.APPEND:
      return {
        ...state,
        surveyDataset: state.surveyDataset.append(action.result),
      };
    case ACTIONS.DROP_TEST:
      return {
        ...state,
        surveyDataset: state.surveyDataset.drop(),
      };
    default:
      return state;
  }
};

export default testSuiteReducer;
