import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {fontSizes, colors} from '../styles/base';

export default function AppText({children}) {
  return <Text style={styles.appText}>{children}</Text>;
}

const styles = StyleSheet.create({
  appText: {
    color: colors.darkGray,
    fontSize: fontSizes.md,
  },
});
