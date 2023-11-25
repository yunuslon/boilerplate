import {hp, nz, wp} from 'helpers/responsive';
import {StyleSheet} from 'react-native';
import {counterIncrement} from 'store/GeneralReducer/selector';
import {RootState} from 'store/configure-store';
import styleVar from 'shared/styleVar';

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: styleVar.theme.white,
  },
  numberTxt: {fontSize: nz(20), fontWeight: '600', color: styleVar.theme.black},
  btnStyl: {position: 'absolute', bottom: hp(40), right: wp(25)},
});

export interface HomeProps {
  counter: number;
  setIncrement: (counter: number) => void;
}

export const mapStateToProps = (state: RootState) => {
  return {
    counter: counterIncrement(state),
  };
};
