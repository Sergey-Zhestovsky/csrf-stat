import { combineReducers } from 'redux';
import { reducer as testSuiteReducer, testSuiteActions } from './testSuite';

export const rootReducer = combineReducers({
  testSuite: testSuiteReducer,
});

export const rootActions = {
  testSuiteActions,
};
