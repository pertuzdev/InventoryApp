import {Alert} from 'react-native';

import {alertValues} from './values';

export const alertOnFirebaseAuth = ({
  action = () => {},
  alertTitle = '',
  alertBody = '',
}) => {
  Alert.alert(alertTitle.toUpperCase(), alertBody, [
    {
      text: 'Aceptar',
      onPress: action,
    },
  ]);
};
