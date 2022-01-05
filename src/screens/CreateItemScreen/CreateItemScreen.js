import React, {useRef, useState} from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {useForm} from 'react-hook-form';

import firestore from '@react-native-firebase/firestore';

import {addItem} from '../../services/firestore/addItem';
import Form from '../../components/form/Form';

import ActivityIndicator from '../../components/ActivityIndicator';
import {uploadFile} from '../../services/cloudStorage/uploadFile';
import {useAlertOnGoBack} from '../../hooks/useAlertOnGoBack';
import {alertOnGoBack} from '../../helpers/alertOnGoBack';
import BottomOptions from '../../components/BottomOptions';
import useImagePick from '../../hooks/useImagePick';
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
      quantity: 1,
      cost: '',
      date: dateCaptured,
      description: '',
    },
  });

  console.log(errors, 'errores');

  const openSheetBottom = () => {
    refRBSheet.current.open();
  };

  const closeSheetBottom = () => {
    refRBSheet.current.close();
  };

  const {image, takePhoto, chosePhotoFromGallery, cleanPhotos} =
    useImagePick(closeSheetBottom);

  const handleSave = async data => {
    setLoading(true);
    if (image) {
      const pathRef = `/images/InventoryApp_Image_${data.name}_${Math.floor(
        Math.random() * 1500,
      )}.jpg`;

      const url = await uploadFile(pathRef, image);
      data.imageURL = url;
    }

    if (data.hasOwnProperty('cost')) data.cost = Number(data.cost);

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
    const validation = code || name || cost || description ? true : false;
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
          <View style={styles.head}>
            <SelectImage openSheetBottom={openSheetBottom} image={image} />
          </View>
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
