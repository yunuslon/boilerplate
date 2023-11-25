import {SafeAreaView, Text, View} from 'react-native';
import React, {FC} from 'react';
import {HomeProps, mapStateToProps, styles} from './DefaultType';
import {connect} from 'react-redux';
import {setIncrement} from 'store/GeneralReducer/action';
import ButtonRound from 'components/BottonRound';

const Home: FC<HomeProps> = ({counter, setIncrement}) => {
  return (
    <SafeAreaView style={styles.page}>
      <Text style={styles.numberTxt}>{counter}</Text>
      <View style={styles.btnStyl}>
        <ButtonRound onPress={() => setIncrement(counter + 1)} />
      </View>
    </SafeAreaView>
  );
};

export default connect(mapStateToProps, {setIncrement})(Home);
