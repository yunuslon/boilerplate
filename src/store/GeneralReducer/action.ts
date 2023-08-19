import * as types from './types';

export const setIncrement = (value: number) => {
  return {
    type: types.SET_INCREMENT,
    payload: value,
  };
};
