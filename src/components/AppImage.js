import React from 'react';

import {Image, StyleSheet, View, Text} from 'react-native';

import {Colors} from '../styles/Colors';

export default function AppImage({
  style,
  src = require('../assets/icons/ic_profile.png'),
}) {
  return (
    <View style={style}>
      <Image style={styles.img} source={src} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  img: {
    flex: 1,
    resizeMode: 'contain',
  },
});
