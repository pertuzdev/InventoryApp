import React, {useRef} from 'react';
import {StyleSheet, View, Text, Pressable, Image} from 'react-native';

import AppImage from './AppImage';

import {Colors} from '../styles/Colors';
import {TextStyles} from '../styles/TextStyles';

export default function CardItem({style}) {
  const src = require('../assets/images/card_image.png');

  return (
    <Pressable
      style={[styles.container, style]}
      android_ripple={{color: Colors.mediumGray}}>
      <View style={[styles.wrapper]}>
        <View style={styles.imgCont}>
          <Image style={styles.img} source={src} />
        </View>
        <View style={styles.txtWrapper}>
          <Text style={TextStyles.cardTitle}>Vegetables</Text>
          <Text style={[styles.cardDescription, TextStyles.cardDescription]}>
            5 Disponibles
          </Text>
        </View>
        <View style={styles.arrow}>
          <Image source={require('../assets/icons/ic_arrow_right.png')} />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 4,
    //paddingVertical: 10,
    paddingHorizontal: 16,
    height: 90,
    //justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageCont: {
    width: '25%',
    height: '80%',
  },
  img: {
    flex: 1,
    resizeMode: 'contain',
  },
  txtWrapper: {
    marginLeft: 20,
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-evenly',
  },
  cardDescription: {},
  arrow: {
    marginRight: 8,
  },
});
