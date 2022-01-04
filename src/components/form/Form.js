import React from 'react';
import {View, StyleSheet} from 'react-native';
import checkItem from '../../services/firestore/checkItem';
import DatePickerInput from './DatePickerInput';

import InputLabeled from './InputLabeled';
import QuantityInput from './QuantityInput';

export default function Form({control, errors, dateCaptured, itemID}) {
  //console.log('errors', errors);

  const validateCode = async value => {
    const itemExist = await checkItem(value, itemID);
    console.log(value, itemID, itemExist, 'Maria');
    return !itemExist || 'Ya existe un producto con ese código';
  };

  return (
    <View style={styles.container}>
      <QuantityInput
        label="Cantidad"
        name="quantity"
        control={control}
        errors={errors}
      />
      <InputLabeled
        label="Código"
        name="code"
        rules={{
          required: 'Este campo es requerido',
          validate: value => validateCode(value),
        }}
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
        keyboardType={'numeric'}
      />

      <DatePickerInput
        control={control}
        errors={errors}
        dateCaptured={dateCaptured}
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
  },
});
