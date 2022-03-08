import React, {useEffect, useState} from 'react';
import {View, Platform, Text, StyleSheet, Image, Pressable} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import {Controller} from 'react-hook-form';

import {formatDate} from '../../../helpers/dates';

import {colors} from '../../../styles/globalStyles';
import {commonInputStyles} from './commonInputStyles';

import ErrorMessage from '../ErrorMessage';

export default function DatePickerPickerInput({control, errors, dateCaptured}) {
  const [date, setDate] = useState(dateCaptured);
  const [dateToShow, setDateToShow] = useState('');
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  useEffect(() => {
    const {standardDate} = formatDate({date});

    setDateToShow(standardDate);
  }, [date]);

  const handleChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const handlePress = e => {
    showMode('date');
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View>
      <View>
        <View style={commonInputStyles.inputContainer}>
          <Text style={commonInputStyles.label}>Fecha de ingreso</Text>
          <Pressable onPress={handlePress} style={styles.wrapper}>
            <Text style={styles.text}>{dateToShow}</Text>
            <Image
              source={require('../../../assets/icons/ic_arrow_right.png')}
            />
          </Pressable>
        </View>
        <Controller
          control={control}
          defaultValue={date}
          render={({field: {onChange, onBlur, value}}) => {
            return (
              show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={value || date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={(event, selectedDate) => {
                    handleChange(event, selectedDate);
                    if (!selectedDate) {
                      onChange(date);
                    } else {
                      onChange(selectedDate);
                    }
                  }}
                />
              )
            );
          }}
          name={'date'}
          rules={{required: 'Este campo es requerido'}}
        />
        <ErrorMessage errors={errors} name={'date'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.darkGray,
    borderRadius: 15,
    height: 40,
  },
  text: {
    color: colors.darkGray,
    fontWeight: 'bold',
    height: 40,
    paddingVertical: 10,
  },
});
