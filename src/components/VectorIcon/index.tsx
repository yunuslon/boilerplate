import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FA from 'react-native-vector-icons/FontAwesome';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import FA6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

import {VectorIconProps} from './DefaultType';

import {nz} from 'helpers/responsive';
import styleVar from 'shared/styleVar';

const VectorIcon = ({type, name, size = 20, color = styleVar.theme.black}: VectorIconProps) => {
  switch (type) {
    case 'FA':
      return <FA name={name} size={nz(size)} color={color} />;
    case 'AntDesign':
      return <AntDesign name={name} size={nz(size)} color={color} />;
    case 'Feather':
      return <Feather name={name} size={nz(size)} color={color} />;
    case 'Entypo':
      return <Entypo name={name} size={nz(size)} color={color} />;
    case 'EvilIcons':
      return <EvilIcons name={name} size={nz(size)} color={color} />;
    case 'FA5':
      return <FA5 name={name} size={nz(size)} color={color} />;
    case 'FA6':
      return <FA6 name={name} size={nz(size)} color={color} />;
    case 'Fontisto':
      return <Fontisto name={name} size={nz(size)} color={color} />;
    case 'Foundation':
      return <Foundation name={name} size={nz(size)} color={color} />;
    case 'Ionicons':
      return <Ionicons name={name} size={nz(size)} color={color} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons name={name} size={nz(size)} color={color} />;
    case 'MaterialIcons':
      return <MaterialIcons name={name} size={nz(size)} color={color} />;
    case 'Octicons':
      return <Octicons name={name} size={nz(size)} color={color} />;
    case 'SimpleLineIcons':
      return <SimpleLineIcons name={name} size={nz(size)} color={color} />;
    case 'Zocial':
      return <Zocial name={name} size={nz(size)} color={color} />;
    default:
      return <FA name={'question'} size={20} color={'black'} />;
  }
};

export default VectorIcon;
