import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {Colors} from '../styles/Colors';

export default function SelectImage({openSheetBottom, image}) {
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

const styles = StyleSheet.create({
  head: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 16,
  },
  imgCont: {
    width: 200,
    height: 200,
    backgroundColor: Colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  img: {
    //flex: 1,
    //resizeMode: 'contain',
    width: 200,
    height: 200,
    borderRadius: 15,
    //backgroundColor: 'blue',
  },
  splashImg: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    //backgroundColor: 'blue',
  },
  editBtn: {
    //alignSelf: 'flex-end',
    position: 'absolute',
    bottom: -10,
    right: -10,
    //margin: -16,
    backgroundColor: Colors.primaryBlue,
    padding: 8,
    borderWidth: 1,
    borderRadius: 100,
  },
});
