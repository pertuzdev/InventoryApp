import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';

export default function BackButton({handlePress}) {
  return (
    <Pressable style={styles.btn} onPress={() => handlePress()}>
      <Image source={require('../../assets/icons/ic_back.png')} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 50,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
