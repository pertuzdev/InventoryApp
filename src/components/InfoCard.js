import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Colors} from '../styles/Colors';
import {TextStyles} from '../styles/TextStyles';

export default function InfoCard({
  quantity = 0,
  label = 'label',
  style = {width: '100%'},
}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={TextStyles.standardRegularTxt}>{quantity}</Text>
      <Text style={TextStyles.standardRegularTxt}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
