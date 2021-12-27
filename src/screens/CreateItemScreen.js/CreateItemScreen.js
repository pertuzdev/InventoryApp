import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {useForm} from 'react-hook-form';

import firestore from '@react-native-firebase/firestore';

import {addItem} from '../../services/addItem';
import Button from '../../components/Button/Button';
import TextButton from '../../components/Button/TextButton';
import Form from '../../components/form/Form';
import {TextStyles} from '../../styles/TextStyles';
import useDate from '../../hooks/useDate';

export default function CreateItemScreen() {
  const dateCaptured = new Date();

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    defaultValues: {
      code: '',
      name: '',
      quantity: 1,
      cost: '',
      date: dateCaptured,
      description: '',
    },
  });

  const handleSave = data => {
    //data.date = Date.parse(data.date);
    data.date = firestore.Timestamp.fromDate(data.date);
    console.log(data, 'dataToSave');

    addItem(data);
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollCont}>
        <View style={styles.head}>
          <Text style={TextStyles.title}>Zapatos Rojos</Text>
          <View style={styles.imgCont}>
            <Image
              source={require('../../assets/images/img-big.png')}
              style={styles.img}
            />
          </View>
        </View>
        <Form control={control} errors={errors} dateCaptured={dateCaptured} />
      </ScrollView>
      <View style={styles.options}>
        <TextButton label="Cancelar" />
        <Button label="Guardar" onPress={handleSubmit(handleSave)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollCont: {},
  head: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 16,
  },
  imgCont: {
    width: 200,
    height: 200,
  },
  img: {
    flex: 1,
    resizeMode: 'contain',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 16,
    marginHorizontal: 20,
  },
});
