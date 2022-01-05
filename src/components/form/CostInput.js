import React from 'react';
import {Text, View, StyleSheet, TextInput, Pressable} from 'react-native';

import {useForm, Controller} from 'react-hook-form';

import ErrorMessage from './ErrorMessage';
import {Colors} from '../../styles/Colors';

export default function CostInput({
  label = '',
  name = '',
  rules = {},
  control,
  placeholder = '',
  errors,
  keyboardType = 'numeric',
}) {
  const allowOnlyNumber = (value, onChange) => {
    const validated = /^(\d*\.{0,1}\d{0,2}$)/.test(value);
    console.log(validated, 'yuna');
    if (validated) {
      onChange(value);
    }
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => {
          return (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={text => allowOnlyNumber(text, onChange)}
              value={value}
              placeholder={placeholder}
              errors={errors}
              keyboardType={keyboardType}
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
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 15,
  },
  inputArea: {
    backgroundColor: 'white',
    borderColor: Colors.darkGray,
    textAlignVertical: 'top',
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
});
