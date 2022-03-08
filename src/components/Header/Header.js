import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './Header.styles';
import {colors} from '../../styles/globalStyles';
import {TextStyles} from '../../styles/globalStyles';

import SearchBar from '../SearchBar/SearchBar';
import InfoCard from '../InfoCard/InfoCard';
import Button from '../Button/Button';
import {AuthContext} from '../../navigation/AuthProvider';

export default function Header({style, onSearchBarPress, totalQty, totalCost}) {
  const src = require('../../assets/images/logo.png');
  const {logout} = useContext(AuthContext);
  return (
    <View style={[styles.container, style]}>
      <View style={styles.wrapper}>
        <View style={styles.profileWrapper}>
          <View style={styles.imgCont}>
            <Image source={src} style={styles.img} />
          </View>
          <View style={styles.txtWrapper}>
            <Text style={TextStyles.title}>Variedades Alex</Text>
            <Text style={TextStyles.cardDescription}>Perfil / Propietario</Text>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Button
            label="Salir"
            backgroundColor={colors.red}
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
