import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import SearchBar from './SearchBar';

export default function SearchHeader({navigation, handleSearch}) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.iconContainer}
        onPress={() => navigation.goBack()}>
        <Image source={require('../assets/icons/ic_back.png')} />
      </Pressable>
      <SearchBar style={styles.searchbar} handleSearch={handleSearch} focus />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  iconContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchbar: {
    flexGrow: 9,
    marginRight: 16,
  },
});
