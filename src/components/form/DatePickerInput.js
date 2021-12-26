import React, {useEffect, useState} from 'react';
import {View, Platform, Text, StyleSheet, Image, Pressable} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import {
  formatDate,
  dateToTimestamp,
  timestampToDate,
} from '../../helpers/dates';
import {Controller} from 'react-hook-form';
import {TextInput} from 'react-native-gesture-handler';
import ErrorMessage from './ErrorMessage';
import {Colors} from '../../styles/Colors';
import useDate from '../../hooks/useDate';

export default function DatePickerPickerInput({control, errors, dateCaptured}) {
  const [date, setDate] = useState(dateCaptured);
  const [dateToShow, setDateToShow] = useState('');
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dateFormatted = formatDate({date});

    setDateToShow(dateFormatted);
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
        <Text style={styles.label}>Fecha de ingreso</Text>
        <Pressable onPress={handlePress} style={styles.wrapper}>
          <Text style={styles.text}>{dateToShow}</Text>
          <Image source={require('../../assets/icons/ic_arrow_right.png')} />
        </Pressable>
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
  label: {
    margin: 20,
    marginBottom: 16,
    marginLeft: 8,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: Colors.darkGray,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: Colors.darkGray,
    borderRadius: 15,
    height: 40,
  },
  text: {
    color: Colors.darkGray,
    fontWeight: 'bold',
    height: 40,
    paddingVertical: 10,
  },
  iconCont: {
    width: '10%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
