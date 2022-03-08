import React from 'react';
import {Text, View, TextInput} from 'react-native';

import {Controller} from 'react-hook-form';

import {commonInputStyles} from './commonInputStyles';

import ErrorMessage from '../ErrorMessage';

export default function InputLabeled({
  inputArea = false,
  label = '',
  name = '',
  rules = {},
  control,
  placeholder = '',
  defaultValue = '',
  errors,
  keyboardType,
  ...rest
}) {
  return (
    <View style={commonInputStyles.inputContainer}>
      <Text style={commonInputStyles.label}>{label}</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => {
          return !inputArea ? (
            <TextInput
              style={commonInputStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value || defaultValue}
              placeholder={placeholder}
              errors={errors}
              keyboardType={keyboardType}
              {...rest}
            />
          ) : (
            <TextInput
              multiline
              numberOfLines={5}
              style={commonInputStyles.inputArea}
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
