import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {wp} from 'helpers/responsive';

const plus = require('assets/icon/plus.png');

interface ButtonRoundProps {
  onPress: () => void;
}

const ButtonRound: React.FC<ButtonRoundProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <Image source={plus} style={styles.img} />
    </TouchableOpacity>
  );
};

export default ButtonRound;

const styles = StyleSheet.create({
  root: {},
  img: {width: wp(25), height: wp(25)},
});
