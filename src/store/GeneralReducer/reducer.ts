import * as types from './types';
import {InitialState, ActionState} from './types';

const intialState: InitialState = {
  incrementValue: 0,
};

const reducer = (
  state: InitialState = intialState,
  action: ActionState,
): InitialState => {
  switch (action.type) {
    case types.SET_INCREMENT:
      return {
        ...state,
        incrementValue: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
