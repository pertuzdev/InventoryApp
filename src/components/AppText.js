import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function AppText({children}) {
  return <Text style={styles.appText}>{children}</Text>;
}

const styles = StyleSheet.create({
  appText: {},
});
