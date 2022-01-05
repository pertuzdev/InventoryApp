import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {BackHandler} from 'react-native';

import {alertOnGoBack} from '../helpers/alertOnGoBack';
import BackButton from '../components/Button/BackButton';

export function useAlertOnGoBack(navigation, hasUnsavedChanges) {
  //alertOnGoBack(navigation, hasUnsavedChanges);
  //console.log('oli');

  const fireAlert = useCallback(
    () => alertOnGoBack(navigation, hasUnsavedChanges),
    [navigation, hasUnsavedChanges],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton handlePress={fireAlert} />,
    });
  }, [navigation, fireAlert]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', fireAlert);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', fireAlert);
  }, [fireAlert]);
}
