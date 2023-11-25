import {nz} from 'helpers/responsive';
import {StyleSheet} from 'react-native';
import styleVar from 'shared/styleVar';

export const styles = StyleSheet.create({
  screen: {backgroundColor: styleVar.theme.white, flex: 1, justifyContent: 'center', alignItems: 'center'},
  label: {fontWeight: '700', color: styleVar.theme.black, fontSize: nz(13)},
});
