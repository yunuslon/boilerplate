import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, nz, wp} from 'helpers/responsive';
import ButtonRound from 'components/BottonRound';
import {RootState} from 'store/configure-store';
import {counterIncrement} from 'store/GeneralReducer/selector';
import {connect, useDispatch} from 'react-redux';
import {setIncrement} from 'store/GeneralReducer/action';

interface HomeProps {
  counter: number;
  setIncrement: () => void;
}

const Home: React.FC<HomeProps> = ({counter}) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.page}>
      <Text style={styles.numberTxt}>{counter}</Text>
      <View style={styles.btnStyl}>
        <ButtonRound onPress={() => dispatch(setIncrement(counter + 1))} />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    counter: counterIncrement(state),
  };
};
export default connect(mapStateToProps, {})(Home);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberTxt: {fontSize: nz(20), fontWeight: '600'},
  btnStyl: {position: 'absolute', bottom: hp(40), right: wp(25)},
});
