import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {Controller} from 'react-hook-form';

import {colors} from '../../../styles/globalStyles';
import {commonInputStyles} from './commonInputStyles';

import ErrorMessage from '../ErrorMessage';

export default function QuantityInput({
  label = '',
  name = '',
  rules = {},
  control,
  errors,
  placeholder = '',
  keyboardType = 'numeric',
}) {
  const [qty, setQty] = useState(1);

  const handleAdd = (value, onChange) => {
    onChange((Number(value) + 1).toString());
  };

  const handleSubtract = (value, onChange) => {
    if (value > 0) {
      onChange((Number(value) - 1).toString());
    }
  };

  const allowOnlyNumber = (value, onChange) => {
    const validated = /^\d+$/.test(value);
    console.log(validated, 'yuna');
    if (value === '') {
      onChange('');
    } else if (validated) {
      onChange(value);
    }
  };

  return (
    <View>
      <Text style={commonInputStyles.label}>{label}</Text>
      <View style={styles.wrapper}>
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({field: {onChange, onBlur, value}}) => {
            return (
              <>
                <Pressable
                  style={styles.btn}
                  android_ripple={{
                    color: colors.gray,
                  }}
                  onPress={() => handleSubtract(value, onChange)}>
                  <Image
                    source={require('../../../assets/icons/ic_minus.png')}
                  />
                </Pressable>
                {/* <Text style={styles.input}>{value}</Text> */}
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={text => allowOnlyNumber(text, onChange)}
                  value={value}
                  errors={errors}
                  keyboardType={keyboardType}
                />
                <Pressable
                  style={styles.btn}
                  android_ripple={{
                    color: colors.gray,
                  }}
                  onPress={() => handleAdd(value, onChange)}>
                  <Image
                    source={require('../../../assets/icons/ic_plus.png')}
                  />
                </Pressable>
              </>
            );
          }}
        />
      </View>
      <ErrorMessage errors={errors} name={name} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    textAlign: 'center',
    marginHorizontal: 20,
    fontSize: 20,
  },
  btn: {
    borderWidth: 2,
    borderRadius: 5,
  },
});
