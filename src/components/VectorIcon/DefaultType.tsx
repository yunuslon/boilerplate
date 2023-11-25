import {StyleSheet} from 'react-native';

export const stylesVectorIcon = StyleSheet.create({});

type typeIcon =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FA'
  | 'FA5'
  | 'FA6'
  | 'Fontisto'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial';

export interface VectorIconProps {
  type: typeIcon;
  size?: number;
  color?: string;
  name: string;
}
