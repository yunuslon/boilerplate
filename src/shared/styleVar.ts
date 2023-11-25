import {Dimensions} from 'react-native';

export default {
  theme: {
    black: '#000000',
    white: '#FFFFFF',
    gray: 'gray',
  },
  sizing: {
    getDimensionWidth: (n: number) => Dimensions.get('screen').width * n,
    getDimensionHeight: (n: number) => Dimensions.get('screen').height * n,
  },
  fonts: {},
};
