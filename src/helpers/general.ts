import {setIncrement} from 'store/generalReducer/generalSlice';
import {store} from 'store/store';

export const AddIncrement = (value: number) => {
  store.dispatch(setIncrement(value));
};
