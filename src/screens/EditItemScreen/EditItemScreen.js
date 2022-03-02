import React, {useRef, useState} from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {useForm} from 'react-hook-form';

import firestore from '@react-native-firebase/firestore';

import {updateItem} from '../../services/firestore/updateItem';
import {uploadFile} from '../../services/cloudStorage/uploadFile';

import {useAlertOnGoBack} from '../../hooks/useAlertOnGoBack';
import useImagePick from '../../hooks/useImagePick';

import {alertOnGoBack} from '../../helpers/alertOnGoBack';

import ItemForm from '../../components/form/ItemForm';
import ActivityIndicator from '../../components/ActivityIndicator';
import BottomOptions from '../../components/BottomOptions';
import SelectImage from '../../components/SelectImage';
import BottomSheet from '../../components/BottomSheet';
import {uploadFileFromURL} from '../../services/cloudStorage/uploadFileFromURL';
import {deleteFileFromURL} from '../../services/cloudStorage/deleteFileFromURL';

export default function EditItemScreen({route, navigation}) {
  const {id, code, name, imageURL, quantity, cost, date, description} =
    route.params;

  // console.log(cost, 'donkey');

  const refRBSheet = useRef();
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    defaultValues: {
      code: code,
      name: name,
      quantity: quantity.toString(),
      cost: cost.toString(),
      date: new Date(date),
      description: description,
    },
  });

  //console.log(errors, 'errores');

  const openSheetBottom = () => {
    refRBSheet.current.open();
  };

  const closeSheetBottom = () => {
    refRBSheet.current.close();
  };

  const {image, takePhoto, chosePhotoFromGallery, cleanPhotos} =
    useImagePick(closeSheetBottom);

  const buildPathRef = ({itemName}) => {
    const nameWithoutSpaces = itemName.replace(/\s/g, '');
    return `/images/InventoryApp_Image_${nameWithoutSpaces}_${Date.parse(
      new Date(),
    )}.jpg`;
  };

  const handleSave = async data => {
    setLoading(true);
    const pathRef = buildPathRef({itemName: data.name});

    if (image && !imageURL) {
      const url = await uploadFile(pathRef, image);
      data.imageURL = url;
    } else if (image && imageURL) {
      console.log(imageURL, '|||', image, '|||', 'SEGUNDO');
      await deleteFileFromURL(imageURL);
      const url = await uploadFile(pathRef, image);
      data.imageURL = url;
      //console.log(url, 'KILLME2');
    } else if (!image && imageURL) {
      //console.log(imageURL, 'TERCERO');
      data.imageURL = imageURL;
    }

    data.cost = Number(data.cost);
    data.quantity = Number(data.quantity);

    data.date = firestore.Timestamp.fromDate(data.date);

    console.log(data, 'dataToUpdate');

    updateItem(id, data).then(() => {
      cleanPhotos();
      setLoading(false);
      navigation.navigate('Detail', {
        id,
        message: 'Producto actualizado',
        ...data,
      });
    });
  };

  const hasUnsavedChanges = () => {
    const {_formValues} = control;

    const validation =
      image ||
      _formValues.code !== code ||
      _formValues.name !== name ||
      Number(_formValues.cost) !== cost ||
      Number(_formValues.quantity) !== quantity ||
      _formValues.description !== description ||
      _formValues.date.toString() !== new Date(date).toString()
        ? true
        : false;

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
          <SelectImage
            openSheetBottom={openSheetBottom}
            image={image || imageURL}
          />
          <ItemForm
            control={control}
            errors={errors}
            dateCaptured={date}
            itemID={id}
          />
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
