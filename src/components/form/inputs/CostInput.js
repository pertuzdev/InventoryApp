import React from 'react';
import {Text, View, TextInput} from 'react-native';

import {Controller} from 'react-hook-form';

import {commonInputStyles} from './commonInputStyles';

import ErrorMessage from '../ErrorMessage';

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
    if (validated) {
      onChange(value);
    }
  };

  return (
    <View style={commonInputStyles.inputContainer}>
      <Text style={commonInputStyles.label}>{label}</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => {
          return (
            <TextInput
              style={commonInputStyles.input}
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
