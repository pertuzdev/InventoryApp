import React from 'react';
import {View, StyleSheet} from 'react-native';
import checkItem from '../../services/firestore/checkItem';
import CostInput from './CostInput';
import DatePickerInput from './DatePickerInput';

import InputLabeled from './InputLabeled';
import QuantityInput from './QuantityInput';

export default function AuthForm({control, errors}) {
  return (
    <View style={styles.container}>
      <InputLabeled
        label="Email"
        name="email"
        rules={{
          required: 'Este campo es requerido',
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Ingrese un correo electrónico válido', // JS only: <p>error message</p> TS only support string
          },
        }}
        control={control}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Escriba su email..."
        errors={errors}
      />

      <InputLabeled
        label="Contraseña"
        name="password"
        rules={{
          required: 'Este campo es requerido',
          validate: value =>
            value?.length > 6 || 'Ingrese una contraseña con 6 dígitos o más',
        }}
        control={control}
        placeholder="Escriba su contraseña..."
        errors={errors}
        secureTextEntry={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
