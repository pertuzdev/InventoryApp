import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';

import {styles} from './CardItem.styles';
import {Colors} from '../../styles/Colors';
import {TextStyles} from '../../styles/TextStyles';

export default function CardItem({
  navigation,
  style,
  id = '',
  code = '',
  name = '',
  imageURL = '',
  quantity = 1,
  cost = '',
  date = {},
  description = '',
}) {
  console.log(imageURL, 'imagen');

  const handlePress = () => {
    navigation.navigate('Detail', {
      id,
      code,
      name,
      imageURL,
      quantity,
      cost,
      date,
      description,
    });
  };

  return (
    <Pressable
      style={[styles.container, style]}
      android_ripple={{color: Colors.mediumGray}}
      onPress={handlePress}>
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
            {code}
          </Text>
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
