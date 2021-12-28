import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import ErrorMessage from './ErrorMessage';
import {Colors} from '../../styles/Colors';

export default function QuantityInput({
  label = '',
  name = '',
  rules = {},
  control,
  errors,
}) {
  const [qty, setQty] = useState(1);
  console.log(qty, 'qty');

  const handleAdd = (value, onChange) => {
    onChange(value + 1);
  };

  const handleSubtract = (value, onChange) => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
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
                    color: Colors.gray,
                  }}
                  onPress={() => handleSubtract(value, onChange)}>
                  <Image source={require('../../assets/icons/ic_minus.png')} />
                </Pressable>
                <Text style={styles.input}>{value}</Text>
                <Pressable
                  style={styles.btn}
                  android_ripple={{
                    color: Colors.gray,
                  }}
                  onPress={() => handleAdd(value, onChange)}>
                  <Image source={require('../../assets/icons/ic_plus.png')} />
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
  label: {
    margin: 20,
    marginBottom: 16,
    marginLeft: 8,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: Colors.darkGray,
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
