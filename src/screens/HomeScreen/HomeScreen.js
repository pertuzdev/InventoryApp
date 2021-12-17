import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import InfoCard from '../../components/InfoCard';
import ProfilePic from '../../components/ProfilePic';
import SearchBar from '../../components/SearchBar';

import {TextStyles} from '../../styles/TextStyles';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
});
