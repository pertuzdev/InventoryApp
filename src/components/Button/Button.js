import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Ripple from 'react-native-material-ripple';

import {Colors} from '../../styles/Colors';
import {TextStyles} from '../../styles/TextStyles';

export default function Button({size = 'sm', style}) {
  return (
    <Ripple
      style={[styles(size).container, style]}
      rippleContainerBorderRadius={15}
      rippleDuration={600}>
      <Text style={[styles().btnText, TextStyles.buttonTxt]}>
        Crear Producto
      </Text>
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
