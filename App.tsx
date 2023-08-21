import React from 'react';
import {Provider as ProviderRedux} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Route from 'route';
import store, {persistor} from 'store/configure-store';
import 'react-native-devsettings';

const App = () => {
  return (
    <>
      <ProviderRedux store={store}>
        <PersistGate persistor={persistor}>
          <Route />
        </PersistGate>
      </ProviderRedux>
    </>
  );
};

export default App;
