import React from 'react';
import {Image, Pressable, View} from 'react-native';

import {styles} from './SelectImage.styles';

import {Colors} from '../../styles/Colors';

export default function SelectImage({openSheetBottom, image}) {
  console.log(image, 'skipper');
  return (
    <View style={styles.head}>
      <Pressable
        style={styles.imgCont}
        onPress={openSheetBottom}
        android_ripple={{color: Colors.darkGray}}>
        {image ? (
          <Image source={{uri: image}} style={styles.img} />
        ) : (
          <Image
            source={require('../assets/icons/ic_camera.png')}
            style={styles.splashImg}
          />
        )}
        <Pressable
          style={styles.editBtn}
          onPress={openSheetBottom}
          android_ripple={{color: Colors.darkGray}}>
          <Image source={require('../assets/icons/ic_pencil.png')} />
        </Pressable>
      </Pressable>
    </View>
  );
}
