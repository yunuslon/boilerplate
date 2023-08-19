export const SET_INCREMENT = 'SET_INCREMENT';

export interface InitialState {
  incrementValue: number;
}

export interface ActionState {
  type: string;
  payload?: any;
}
