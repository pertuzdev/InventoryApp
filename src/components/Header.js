import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import ProfilePic from './ProfilePic';
import AppText from './AppText';

import {Colors} from '../styles/Colors';
import {TextStyles} from '../styles/TextStyles';
import SearchBar from './SearchBar';
import InfoCard from './InfoCard';

export default function Header({style}) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.wrapper}>
        <ProfilePic />
        <View style={styles.txtWrapper}>
          <Text style={TextStyles.title}>Variedades Alex</Text>
          <Text style={TextStyles.cardDescription}>Perfil / Propietario</Text>
        </View>
      </View>
      <SearchBar style={styles.searchBar} />
      <View style={styles.infoWrapper}>
        <InfoCard style={styles.infoCard} />
        <InfoCard style={styles.infoCard} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
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
