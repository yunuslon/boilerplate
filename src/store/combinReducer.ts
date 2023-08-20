import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  Middleware,
} from 'redux';

import ReduxThunk from 'redux-thunk';
import GeneralReducer from './GeneralReducer/reducer';

const middlewares: Middleware[] = [ReduxThunk];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}
const rootReducer = combineReducers({
  defaultReducer: () => [],
  generalReducer: GeneralReducer,
});

export default () => {
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return store;
};
