import React from 'react';
import {View} from 'react-native';

import {styles} from './ActivityIndicator.styles';

import Loader from '../Loader/Loader';

export default function ActivityIndicator({children, loading}) {
  console.log(loading, 'the weeknd');
  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      {children}
    </View>
  );
}
