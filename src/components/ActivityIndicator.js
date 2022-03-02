import React, {useState} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

import Loader from './Loader';

export default function ActivityIndicator({children, loading}) {
  console.log(loading, 'the weeknd');
  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#CCCCCC',
    height: Dimensions.get('window').height,
    //padding: 15,
    //display: 'flex',
    //alignItems: 'flex-start',
    //width: '100%',
    //paddingTop: 50,
  },
});
