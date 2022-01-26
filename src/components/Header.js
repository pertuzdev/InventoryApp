import React, {useContext} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import AppImage from './AppImage';
import AppText from './AppText';

import {Colors} from '../styles/Colors';
import {TextStyles} from '../styles/TextStyles';
import SearchBar from './SearchBar';
import InfoCard from './InfoCard';
import Button from './Button/Button';
import {AuthContext} from '../navigation/AuthProvider';

export default function Header({style, onSearchBarPress, totalQty, totalCost}) {
  const src = require('../assets/images/logo.png');
  const {logout} = useContext(AuthContext);
  return (
    <View style={[styles.container, style]}>
      <View style={styles.wrapper}>
        <View style={styles.imgCont}>
          <Image source={src} style={styles.img} />
        </View>
        <View style={styles.txtWrapper}>
          <Text style={TextStyles.title}>Variedades Alex</Text>
          <Text style={TextStyles.cardDescription}>Perfil / Propietario</Text>
        </View>
        <View style={styles.btnContainer}>
          <Button
            label="Salir"
            backgroundColor={Colors.red}
            style={{width: '80%', paddingVertical: 12}}
            onPress={() => logout()}
          />
        </View>
      </View>
      <SearchBar style={styles.searchBar} onPress={onSearchBarPress} />
      <View style={styles.infoWrapper}>
        <InfoCard
          style={styles.infoCard}
          label={'Cantidad Total'}
          value={totalQty}
        />
        <InfoCard
          style={styles.infoCard}
          label={'Costo Total'}
          value={totalCost}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  imgCont: {
    width: 80,
    height: 50,
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  img: {
    //width: 200,
    //height: 200,
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    // backgroundColor: 'blue',
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
    marginTop: 14,
    marginBottom: 14,
  },
  infoCard: {
    width: '45%',
  },
  btnContainer: {
    width: 110,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
