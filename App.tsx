import React from 'react';
import {Provider as ProviderRedux} from 'react-redux';

import Route from 'route';
import store from 'store/configure-store';

const App = () => {
  return (
    <>
      <ProviderRedux store={store}>
        <Route />
      </ProviderRedux>
    </>
  );
};

export default App;
