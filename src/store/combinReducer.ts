import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  Middleware,
} from 'redux';

import ReduxThunk from 'redux-thunk';
import GeneralReducer from './GeneralReducer/reducer';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import {persistReducer, persistStore} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';

const middlewares: Middleware[] = [ReduxThunk];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['generalReducer'],
};

const generalReducerPersistConfig = {
  key: 'generalReducer',
  storage: AsyncStorage,
  whitelist: ['incrementValue'],
};

const rootReducer = combineReducers({
  defaultReducer: () => [],
  generalReducer: persistReducer(generalReducerPersistConfig, GeneralReducer),
});

type RootReducer = ReturnType<typeof rootReducer>;
const pReducer = persistReducer<RootReducer>(persistConfig, rootReducer);

export default () => {
  const store = createStore(
    pReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  const persistor = persistStore(store);
  return {store, persistor};
};
