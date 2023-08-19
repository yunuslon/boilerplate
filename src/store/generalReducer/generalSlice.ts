import {createSlice} from '@reduxjs/toolkit';
import {InitialState} from './types';

const initialState: InitialState = {
  incrementValue: 0,
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setIncrement(state, action) {
      const value = action.payload;
      state.incrementValue = value;
    },
  },
});

export const {setIncrement} = generalSlice.actions;

export default generalSlice.reducer;
