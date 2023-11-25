import {createNavigationContainerRef, StackActions} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';

export type TParams = Record<string, string | number | (() => void)>;

export const navigationRef = createNavigationContainerRef<any>();

export function goTo(name: string, params: Record<string, any> = {}): void {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function replaceStack(name: string, params: Record<string, any> = {}): void {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
}
export function resetStack(name: string, params: Record<string, any> = {}): void {
  if (navigationRef.isReady()) {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{name, params}],
    });
    navigationRef.dispatch(resetAction);
  }
}

export function goBack(): void {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}
