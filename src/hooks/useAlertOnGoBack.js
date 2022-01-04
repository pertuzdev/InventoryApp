import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Alert, Pressable, Image, BackHandler} from 'react-native';

import {alertOnGoBack} from '../helpers/alertOnGoBack';
import BackButton from '../components/Button/BackButton';

export function useAlertOnGoBack(navigation, hasUnsavedChanges) {
  //alertOnGoBack(navigation, hasUnsavedChanges);
  console.log('oli');

  const fireAlert = () => alertOnGoBack(navigation, hasUnsavedChanges);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton handlePress={fireAlert} />,
    });
  }, [navigation]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', fireAlert);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', fireAlert);
  }, []);
}
