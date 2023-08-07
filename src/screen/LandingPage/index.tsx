import {StatusBar, Text, View} from 'react-native';
import React from 'react';

const LandingPage = () => {
  return (
    <View>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        animated={true}
        barStyle="dark-content"
      />
      <Text>LandingPage</Text>
    </View>
  );
};

export default LandingPage;
