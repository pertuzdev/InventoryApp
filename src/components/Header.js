import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import AppImage from './AppImage';
import AppText from './AppText';

import {Colors} from '../styles/Colors';
import {TextStyles} from '../styles/TextStyles';
import SearchBar from './SearchBar';
import InfoCard from './InfoCard';

export default function Header({style, onSearchBarPress}) {
  const src = require('../assets/icons/ic_profile.png');
  return (
    <View style={[styles.container, style]}>
      <View style={styles.wrapper}>
        <View>
          <Image source={src} />
        </View>
        <View style={styles.txtWrapper}>
          <Text style={TextStyles.title}>Variedades Alex</Text>
          <Text style={TextStyles.cardDescription}>Perfil / Propietario</Text>
        </View>
      </View>
      <SearchBar style={styles.searchBar} onPress={onSearchBarPress} />
      <View style={styles.infoWrapper}>
        <InfoCard style={styles.infoCard} />
        <InfoCard style={styles.infoCard} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgCont: {
    width: '20%',
    height: '90%',
  },
  txtWrapper: {
    marginLeft: 20,
  },
  infoWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchBar: {
    marginTop: 24,
    marginBottom: 24,
  },
  infoCard: {
    width: '45%',
  },
});
