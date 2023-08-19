import {createSelector} from 'reselect';
import {RootState} from 'store/configure-store';
import {InitialState} from './types';

const generalSelector = (state: RootState) => state.generalReducer;

export const counterIncrement = createSelector(
  generalSelector,
  (generalState: InitialState) => {
    return generalState.incrementValue;
  },
);
