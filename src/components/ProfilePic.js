import React from 'react';

import {Image, StyleSheet, View} from 'react-native';

import {Colors} from '../styles/Colors';

export default function ProfilePic({style}) {
  return (
    <View>
      <Image style={style} source={require('../assets/icons/ic_profile.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
