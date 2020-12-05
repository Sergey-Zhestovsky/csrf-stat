import { useDispatch } from 'react-redux';
import { ACTIONS } from './reducer';
import Notification from '../../models/Notification';

export const add = ({ title, message, type, timeout }) => {
  return (dispatch) => {
    dispatch({
      type: ACTIONS.ADD,
      notification: new Notification({ title, message, type, timeout }),
    });
  };
};

export const remove = (id) => {
  return (dispatch) => {
    dispatch({
      type: ACTIONS.REMOVE,
      id,
    });
  };
};

export const clear = () => {
  return (dispatch) => {
    dispatch({
      type: ACTIONS.CLEAR,
    });
  };
};

export const useNotificationActions = () => {
  const dispatch = useDispatch();

  return {
    add: ({ title, message, type, timeout }) => dispatch(add({ title, message, type, timeout })),
    remove: (id) => dispatch(remove(id)),
    clear: () => dispatch(clear()),
  };
};
