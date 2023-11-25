import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Dashboard: NavigatorScreenParams<TabParamList>;
};
export type NavigationProps = NativeStackScreenProps<RootStackParamList>;

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
  Setting: undefined;
};

export type DashboardScreenNavigationProp<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TabParamList, RootStackParamList {}
  }
}
