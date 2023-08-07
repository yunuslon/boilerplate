import React from 'react';
import {
  StackActions,
  CommonActions,
  NavigationContainerRef,
} from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export const navigate = (name: string, params?: any) => {
  navigationRef.current?.navigate(name, params);
};

export const push = (...args: Parameters<typeof StackActions.push>) => {
  navigationRef.current?.dispatch(StackActions.push(...args));
};

export const replace = (...args: Parameters<typeof StackActions.replace>) => {
  navigationRef.current?.dispatch(StackActions.replace(...args));
};

export const reset = (name: string, params?: any) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name, params}],
    }),
  );
};

export const pop = (...args: Parameters<typeof StackActions.pop>) => {
  navigationRef.current?.dispatch(StackActions.pop(...args));
};

export const popToTop = () => {
  navigationRef.current?.dispatch(StackActions.popToTop());
};
