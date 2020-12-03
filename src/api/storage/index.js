import { combineReducers } from 'redux';
import { reducer as testSuiteReducer, testSuiteActions } from './testSuite';
import { reducer as notificationReducer, notificationActions } from './notification';

export const rootReducer = combineReducers({
  testSuite: testSuiteReducer,
  notification: notificationReducer,
});

export const rootActions = {
  testSuiteActions,
  notificationActions,
};
