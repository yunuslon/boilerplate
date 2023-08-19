import {createSelector} from 'reselect';
import {RootState} from 'store/store';
import {InitialState} from './types';

const generalSelector = (state: RootState) => state.general;

export const counterIncrement = createSelector(
  generalSelector,
  (generalState: InitialState) => {
    return generalState.incrementValue;
  },
);
