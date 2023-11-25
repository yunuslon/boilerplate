import React from 'react';
import {Provider as ProviderRedux} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Route from 'navigation';
import store, {persistor} from 'store/configure-store';
import 'react-native-devsettings';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <ProviderRedux store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle={'dark-content'} backgroundColor="transparent" translucent />
          <Route />
        </PersistGate>
      </ProviderRedux>
    </>
  );
};

export default App;
