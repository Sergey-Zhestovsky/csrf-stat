export const ACTIONS = {
  ADD: 'NOTIFICATION::ADD',
  REMOVE: 'NOTIFICATION::REMOVE',
  CLEAR: 'NOTIFICATION::CLEAR',
};

const initialState = {
  list: [],
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        ...state,
        list: [...state.list, action.notification],
      };
    case ACTIONS.REMOVE:
      return {
        ...state,
        list: [...state.list.filter((el) => el.id !== action.id)],
      };
    case ACTIONS.CLEAR:
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};

export default notificationReducer;
