import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Colors} from '../styles/Colors';
import {TextStyles} from '../styles/TextStyles';

export default function InfoCard({
  value = 0,
  label = 'label',
  style = {width: '100%'},
}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={TextStyles.standardRegularTxt}>{value}</Text>
      <Text style={styles.text}>{label}</Text>
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
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: Colors.blackGray,
  },
});
