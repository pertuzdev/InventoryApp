import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '../../styles/globalStyles';

const ErrorMessage = ({errors, name}) => {
  //console.log(errors, 'AAAHH');

  if (errors && errors[name]) {
    console.log(errors, 'KEANU');
    // console.log(errors[name], 'KHE');
    return <Text style={styles.errorTxt}>{errors[name].message}</Text>;
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  errorTxt: {
    fontSize: 10,
    color: colors.red,
    marginLeft: 8,
  },
});

export default ErrorMessage;
