import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from 'screen/Dashboard';
import {RootStackParamList} from './typeRoute';
import {navigationRef} from 'helpers/navigationRef';

const Stack = createNativeStackNavigator<RootStackParamList>();
const screenOptions = {headerShown: false};

const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={screenOptions} initialRouteName={'Dashboard'}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
