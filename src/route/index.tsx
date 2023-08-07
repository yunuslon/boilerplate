import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, LandingPage} from 'screen';

const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName={'LandingPage'}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
