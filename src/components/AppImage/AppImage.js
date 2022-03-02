import React from 'react';

import {Image, View} from 'react-native';

import {styles} from './AppImage.styles';

export default function AppImage({
  style,
  src = require('../../assets/icons/ic_profile.png'),
}) {
  return (
    <View style={style}>
      <Image style={styles.img} source={src} />
    </View>
  );
}
