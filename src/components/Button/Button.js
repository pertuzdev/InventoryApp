import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Ripple from 'react-native-material-ripple';

import {Colors} from '../../styles/Colors';
import {TextStyles} from '../../styles/TextStyles';

export default function Button({
  navigation,
  onPressIn,
  onPress,
  onPressOut,
  size = 'sm',
  backgroundColor = '',
  label = 'label',
  style,
}) {
  return (
    <Ripple
      style={[styles(size, backgroundColor).container, style]}
      rippleContainerBorderRadius={15}
      rippleDuration={600}
      onPressIn={onPressIn}
      onPress={onPress}
      onPressOut={onPressOut}>
      <Text style={[styles().btnText, TextStyles.buttonTxt]}>{label}</Text>
    </Ripple>
  );
}

const styles = (size, backgroundColor) =>
  StyleSheet.create({
    container: {
      width: size === 'lg' ? '100%' : '40%',
      backgroundColor: backgroundColor || Colors.primaryBlue,
      paddingVertical: 16,
      borderRadius: 15,
    },
    btnText: {
      textAlign: 'center',
      color: '#fff',
    },
  });
