import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './InfoCard.styles';
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
