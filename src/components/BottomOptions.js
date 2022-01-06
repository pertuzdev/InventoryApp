import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../styles/Colors';
import Button from './Button/Button';
import TextButton from './Button/TextButton';

export default function BottomOptions({
  handleCancelPress,
  handleSavePressIn,
  handleSavePress,
  handleSavePressOut,
}) {
  return (
    <View style={styles.options}>
      <TextButton label="Cancelar" onPress={handleCancelPress} />
      <Button
        label="Guardar"
        onPressIn={handleSavePressIn}
        onPress={handleSavePress}
        onPressOut={handleSavePressOut}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
    elevation: 20,
  },
});
