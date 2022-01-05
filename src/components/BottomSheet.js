import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Colors} from '../styles/Colors';

export default function BottomSheet({
  refRBSheet,
  takePhoto,
  chosePhotoFromGallery,
}) {
  return (
    <RBSheet
      ref={refRBSheet}
      height={170}
      animationType={'fade'}
      closeOnDragDown={true}
      closeOnPressMask={true}
      openDuration={0}
      closeDuration={0}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0,0,0,0.5)',
        },
        draggableIcon: {
          backgroundColor: '#000',
        },
      }}>
      <View style={styles.sheetContainer}>
        <Text style={styles.sheetTitle}>Foto del producto</Text>
        <View style={styles.sheetWrapper}>
          <Pressable
            style={styles.sheetBtn}
            android_ripple={{color: Colors.mediumGray}}
            onPress={takePhoto}>
            <View style={styles.sheetBtnWrapp}>
              <Image
                style={styles.sheetOptIcon}
                source={require('../assets/icons/ic_camera.png')}
              />
            </View>
            <Text style={styles.sheetIconTxt}>Cámara</Text>
          </Pressable>
          <Pressable
            style={styles.sheetBtn}
            android_ripple={{color: Colors.mediumGray}}
            onPress={chosePhotoFromGallery}>
            <View style={styles.sheetBtnWrapp}>
              <Image
                style={styles.sheetOptIcon}
                source={require('../assets/icons/ic_gallery.png')}
              />
            </View>
            <Text style={styles.sheetIconTxt}>Galería</Text>
          </Pressable>
        </View>
      </View>
    </RBSheet>
  );
}

const styles = StyleSheet.create({
  sheetContainer: {
    marginLeft: 8,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    marginLeft: 16,
  },
  sheetWrapper: {
    flexDirection: 'row',
    marginVertical: 0,
    marginLeft: 8,
    //backgroundColor: 'blue',
  },
  sheetBtn: {
    marginRight: 24,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sheetBtnWrapp: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 100,
  },
  sheetOptIcon: {
    width: 25,
    height: 25,
  },
  sheetIconTxt: {
    marginTop: 4,
  },
});
