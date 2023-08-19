import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, nz, wp} from 'helpers/responsive';
import ButtonRound from 'components/ButtonRound';
import {connect} from 'react-redux';
import {counterIncrement} from 'store/generalReducer/generalSelector';
import {RootState} from 'store/store';
import {AddIncrement} from 'helpers/general';

interface HomeProps {
  counter: number;
}

const Home: React.FC<HomeProps> = ({counter}) => {
  return (
    <SafeAreaView style={styles.page}>
      <Text style={styles.numberTxt}>{counter}</Text>
      <View style={styles.btnStyl}>
        <ButtonRound onPress={() => AddIncrement(counter + 1)} />
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
