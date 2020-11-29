import SurveyDataset from '../../models/SurveyDataset';
import { list as algorithmList } from '../../../data/algorithms.json';
import { list as environmentList } from '../../../data/environments.json';

export const ACTIONS = {
  SET_ALGORITHM: 'TEST_SUITE::SET_ALGORITHM',
  SET_ENVIRONMENT: 'TEST_SUITE::SET_ENVIRONMENT',
  APPEND: 'TEST_SUITE::APPEND',
  DROP_TEST: 'TEST_SUITE::DROP_TEST',
};

const getRandomResult = (id) => ({
  id,
  speed: Math.round(Math.random() * 40),
  delay: Math.round(Math.random() * 70),
  queue: Math.round(Math.random() * 23),
  load: Math.round(Math.random() * 250),
});

const initialState = {
  algorithm: algorithmList[0],
  environment: environmentList[0],
  surveyDataset: new SurveyDataset(new Array(25).fill().map(() => getRandomResult())),
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
