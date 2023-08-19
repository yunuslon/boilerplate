import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';

import ReduxThunk from 'redux-thunk';
import GeneralReducer from './GeneralReducer/reducer';

const rootReducer = combineReducers({
  defaultReducer: () => [],
  generalReducer: GeneralReducer,
});

export default () => {
  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
  return store;
};
