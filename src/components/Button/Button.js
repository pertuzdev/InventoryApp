import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Ripple from 'react-native-material-ripple';

import {Colors} from '../../styles/Colors';
import {TextStyles} from '../../styles/TextStyles';

export default function Button({
  navigation,
  onPress,
  size = 'sm',
  label = 'label',
  style,
}) {
  return (
    <Ripple
      style={[styles(size).container, style]}
      rippleContainerBorderRadius={15}
      rippleDuration={600}
      onPress={onPress}>
      <Text style={[styles().btnText, TextStyles.buttonTxt]}>{label}</Text>
    </Ripple>
  );
}

const styles = size =>
  StyleSheet.create({
    container: {
      width: size === 'lg' ? '100%' : '40%',
      backgroundColor: Colors.primaryBlue,
      paddingVertical: 16,
      borderRadius: 15,
    },
    btnText: {
      textAlign: 'center',
      color: '#fff',
    },
  });
