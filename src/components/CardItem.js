import React, {useRef} from 'react';
import {StyleSheet, View, Text, Pressable, Image} from 'react-native';

import AppImage from './AppImage';

import {Colors} from '../styles/Colors';
import {TextStyles} from '../styles/TextStyles';

export default function CardItem({style, name, quantity, imageURL}) {
  const src = require('../assets/images/card_image.png');

  //console.log(imageURL, typeof imageURL);

  return (
    <Pressable
      style={[styles.container, style]}
      android_ripple={{color: Colors.mediumGray}}>
      <View style={[styles.wrapper]}>
        <View style={styles.imgCont}>
          {imageURL ? (
            <Image style={styles.img} source={{uri: imageURL}} />
          ) : (
            <Image
              style={styles.splashImg}
              source={require('../assets/icons/ic_camera.png')}
            />
          )}
        </View>
        <View style={styles.txtWrapper}>
          <Text style={TextStyles.cardTitle}>{name}</Text>
          <Text style={[styles.cardDescription, TextStyles.cardDescription]}>
            {`${quantity} Disponibles`}
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
  imgCont: {
    width: 75,
    height: 75,
    backgroundColor: Colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  img: {
    //flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  splashImg: {
    width: 25,
    height: 25,
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
