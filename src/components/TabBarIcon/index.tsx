import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import VectorIcon from 'components/VectorIcon';
import styleVar from 'shared/styleVar';
import {hp, nz, widthDimensionScreen} from 'helpers/responsive';

const TabBarIcon = ({focused, route}: any) => {
  switch (route.name) {
    case 'Home':
      return (
        <View style={styles.container}>
          <VectorIcon
            name="dashboard"
            type="MaterialIcons"
            color={focused ? styleVar.theme.black : styleVar.theme.gray}
            size={22}
          />
          <Text style={focused ? styles.txtIconBlue : styles.txtIcon}>Home</Text>
        </View>
      );
    case 'Profile':
      return (
        <View style={styles.container}>
          <VectorIcon
            name="user"
            type="Feather"
            color={focused ? styleVar.theme.black : styleVar.theme.gray}
            size={22}
          />
          <Text style={focused ? styles.txtIconBlue : styles.txtIcon}>Profile</Text>
        </View>
      );
    case 'Setting':
      return (
        <View style={styles.container}>
          <VectorIcon
            name="setting"
            type="AntDesign"
            color={focused ? styleVar.theme.black : styleVar.theme.gray}
            size={22}
          />
          <Text style={focused ? styles.txtIconBlue : styles.txtIcon}>Setting</Text>
        </View>
      );
    default:
      return (
        <View style={styles.container}>
          <VectorIcon
            name="dashboard"
            type="MaterialIcons"
            color={focused ? styleVar.theme.black : styleVar.theme.gray}
            size={22}
          />
          <Text style={focused ? styles.txtIconBlue : styles.txtIcon}>Home</Text>
        </View>
      );
  }
};

export default TabBarIcon;

export const styles = StyleSheet.create({
  container: {alignItems: 'center', marginTop: hp(10), width: widthDimensionScreen / 4},
  txtIcon: {fontWeight: '700', color: styleVar.theme.gray, fontSize: nz(10.5), marginTop: hp(2)},
  txtIconBlue: {fontWeight: '700', color: styleVar.theme.black, fontSize: nz(10.5), marginTop: hp(2)},
  coinSty: {width: nz(22), height: nz(22)},
});
