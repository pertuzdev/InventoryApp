import React, {useEffect, useLayoutEffect, useState} from 'react';

import {Alert, Pressable, Image, BackHandler} from 'react-native';

export function alertOnGoBack(navigation, hasUnsavedChanges) {
  if (hasUnsavedChanges()) {
    Alert.alert(
      'SALIR SIN GUARDAR',
      'Tienes cambios sin guardar. ¿Seguro que deseas salir?',
      [
        {text: 'Cancelar', style: 'cancel', onPress: () => {}},
        {
          text: 'Salir',
          style: 'destructive',
          onPress: () => navigation.goBack(),
        },
      ],
    );
  } else {
    navigation.goBack();
  }
  return true;
}
