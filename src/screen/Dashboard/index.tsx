import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from 'screen/Home';
import Profile from 'screen/Profile';
import Setting from 'screen/Setting';
import {hp} from 'helpers/responsive';
import {TabParamList} from 'navigation/typeRoute';
import TabBarIcon from 'components/TabBarIcon';

const Tab = createBottomTabNavigator<TabParamList>();

const Dashboard = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {height: hp(55), paddingBottom: hp(13)},
        headerShown: false,
        tabBarIcon: icProps => <TabBarIcon {...icProps} route={route} />,
        tabBarLabel: () => null,
      })}>
      <Tab.Screen name={'Home'} component={Home} />
      <Tab.Screen name={'Profile'} component={Profile} />
      <Tab.Screen name={'Setting'} component={Setting} />
    </Tab.Navigator>
  );
};

export default Dashboard;
