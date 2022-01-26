import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import HomeStack from './src/navigation/HomeStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Providers from './src/navigation';

const App = () => {
  return <Providers />;
};

const styles = StyleSheet.create({});

export default App;
