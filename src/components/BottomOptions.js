import React from 'react';
import {StyleSheet, View} from 'react-native';
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
    marginTop: 16,
    marginBottom: 16,
    marginHorizontal: 20,
  },
});
