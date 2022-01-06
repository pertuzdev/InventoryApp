import React, {useRef, useState} from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {useForm} from 'react-hook-form';

import firestore from '@react-native-firebase/firestore';

import {addItem} from '../../services/firestore/addItem';
import {uploadFile} from '../../services/cloudStorage/uploadFile';

import {useAlertOnGoBack} from '../../hooks/useAlertOnGoBack';
import useImagePick from '../../hooks/useImagePick';

import {alertOnGoBack} from '../../helpers/alertOnGoBack';

import Form from '../../components/form/Form';
import ActivityIndicator from '../../components/ActivityIndicator';
import BottomOptions from '../../components/BottomOptions';
import BottomSheet from '../../components/BottomSheet';
import SelectImage from '../../components/SelectImage';

export default function CreateItemScreen({navigation}) {
  const dateCaptured = new Date();

  const refRBSheet = useRef();

  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    defaultValues: {
      code: '',
      name: '',
      quantity: '1',
      cost: '',
      date: dateCaptured,
      description: '',
    },
  });

  const openSheetBottom = () => {
    refRBSheet.current.open();
  };

  const closeSheetBottom = () => {
    refRBSheet.current.close();
  };

  const {image, takePhoto, chosePhotoFromGallery, cleanPhotos} =
    useImagePick(closeSheetBottom);

  console.log(image, 'Jenny');

  const buildPathRef = ({itemName}) => {
    const nameWithoutSpaces = itemName.replace(/\s/g, '');
    return `/images/InventoryApp_Image_${nameWithoutSpaces}_${Date.parse(
      new Date(),
    )}.jpg`;
  };

  const handleSave = async data => {
    setLoading(true);
    if (image) {
      const pathRef = buildPathRef({itemName: data.name});

      const url = await uploadFile(pathRef, image);
      data.imageURL = url;
    }

    data.cost = Number(data.cost);
    data.quantity = Number(data.quantity);

    data.date = firestore.Timestamp.fromDate(data.date);

    console.log(data, 'dataToSave');

    addItem(data).then(() => {
      cleanPhotos();
      setLoading(false);
      navigation.navigate('Home', {message: 'Producto creado'});
    });
  };

  const hasUnsavedChanges = () => {
    const {code, name, cost, description} = control._formValues;
    const validation =
      image || code || name || cost || description ? true : false;
    return validation ? true : false;
  };

  useAlertOnGoBack(navigation, hasUnsavedChanges);

  const handleCancelPress = () => {
    alertOnGoBack(navigation, hasUnsavedChanges);
  };

  return (
    <ActivityIndicator loading={loading}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollCont}>
          <SelectImage openSheetBottom={openSheetBottom} image={image} />
          <Form control={control} errors={errors} dateCaptured={dateCaptured} />
        </ScrollView>
        <BottomOptions
          handleCancelPress={handleCancelPress}
          handleSavePress={handleSubmit(handleSave)}
          handleSavePressOut={() => Keyboard.dismiss()}
        />
        <BottomSheet
          refRBSheet={refRBSheet}
          takePhoto={takePhoto}
          chosePhotoFromGallery={chosePhotoFromGallery}
        />
      </View>
    </ActivityIndicator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollCont: {},
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 16,
    marginHorizontal: 20,
  },
});
