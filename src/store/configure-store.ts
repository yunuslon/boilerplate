import configStore from './combinReducer';

const {store, persistor} = configStore();

export {persistor};

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
