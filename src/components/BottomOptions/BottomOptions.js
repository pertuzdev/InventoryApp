import React from 'react';
import {View} from 'react-native';

import {styles} from './BottomOptions.styles';

import Button from '../Button/Button';
import TextButton from '../Button/TextButton';

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
