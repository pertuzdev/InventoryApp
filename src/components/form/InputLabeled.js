import React from 'react';
import {Text, View, StyleSheet, TextInput, Pressable} from 'react-native';

import {useForm, Controller} from 'react-hook-form';

import ErrorMessage from './ErrorMessage';
import {Colors} from '../../styles/Colors';

export default function InputLabeled({
  inputArea = false,
  label = '',
  name = '',
  rules = {},
  control,
  placeholder = '',
  errors,
}) {
  console.log(inputArea, 'testing');
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => {
          return !inputArea ? (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              errors={errors}
            />
          ) : (
            <TextInput
              multiline
              numberOfLines={5}
              style={styles.inputArea}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Escriba la descripción del producto..."
            />
          );
        }}
        name={name}
        rules={rules}
      />
      <ErrorMessage errors={errors} name={name} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    margin: 20,
    marginBottom: 16,
    marginLeft: 8,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: Colors.darkGray,
  },
  input: {
    backgroundColor: 'white',
    borderColor: Colors.darkGray,
    borderWidth: 1,
    height: 40,
    padding: 10,
    borderRadius: 15,
  },
  inputArea: {
    backgroundColor: 'white',
    borderColor: Colors.zircon,
    textAlignVertical: 'top',
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
});
