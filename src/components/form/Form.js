import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import InputLabeled from './InputLabeled';

export default function Form({control, errors}) {
  //console.log('errors', errors);

  return (
    <View style={styles.container}>
      <InputLabeled
        label="Código"
        name="code"
        rules={{required: 'Este campo es requerido'}}
        control={control}
        placeholder="Escriba el código del producto..."
        errors={errors}
      />

      <InputLabeled
        label="Nombre"
        name="name"
        rules={{required: 'Este campo es requerido'}}
        control={control}
        placeholder="Escriba el nombre del producto..."
        errors={errors}
      />

      <InputLabeled
        label="Costo (opcional)"
        name="cost"
        control={control}
        placeholder="Escriba el precio de compra del producto..."
        errors={errors}
      />

      <InputLabeled
        label="Fecha de ingreso"
        name="date"
        control={control}
        errors={errors}
      />

      <InputLabeled
        label="Descripción"
        name="description"
        control={control}
        placeholder="Escriba la descripción del producto..."
        errors={errors}
        inputArea={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: 'white',
  },
});
