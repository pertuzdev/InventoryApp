import React, {useRef} from 'react';
import {View, StyleSheet} from 'react-native';

import InputLabeled from './InputLabeled';

export default function SignupForm({control, errors, watch}) {
  const password = useRef({});
  password.current = watch('password', '');

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
      <InputLabeled
        label="Confirme su contraseña"
        name="confirm_password"
        rules={{
          required: 'Porfavor confirme su contraseña',
          validate: value =>
            value === password.current || 'The passwords do not match',
        }}
        control={control}
        placeholder="Confirme su contraseña..."
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
  },
});
