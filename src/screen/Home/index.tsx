import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, nz, wp} from 'helpers/responsive';
import ButtonRound from 'components/BottonRound';

interface HomeProps {
  counter: number;
}

const Home: React.FC<HomeProps> = ({counter = 0}) => {
  return (
    <SafeAreaView style={styles.page}>
      <Text style={styles.numberTxt}>{counter}</Text>
      <View style={styles.btnStyl}>
        <ButtonRound onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberTxt: {fontSize: nz(20), fontWeight: '600'},
  btnStyl: {position: 'absolute', bottom: hp(40), right: wp(25)},
});
