import React from 'react';
import {Image, Pressable, View} from 'react-native';

import {styles} from './SearchHeader.styles';

import SearchBar from '../SearchBar/SearchBar';

export default function SearchHeader({navigation, handleSearch}) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.iconContainer}
        onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/icons/ic_back.png')} />
      </Pressable>
      <SearchBar style={styles.searchbar} handleSearch={handleSearch} focus />
    </View>
  );
}
