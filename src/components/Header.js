import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import ProfilePic from './ProfilePic';
import AppText from './AppText';

import {Colors} from '../styles/Colors';
import {TextStyles} from '../styles/TextStyles';

export default function Header() {
  return (
    <View style={styles.container}>
      <ProfilePic />
      <View style={styles.txtWrapper}>
        <Text style={TextStyles.title}>Variedades Alex</Text>
        <Text style={TextStyles.cardDescription}>Perfil / Propietario</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  txtWrapper: {
    marginLeft: 20,
  },
});
