import React, {useRef, useState} from 'react';
import {Image, Pressable, Keyboard, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {useForm} from 'react-hook-form';

import RBSheet from 'react-native-raw-bottom-sheet';

import firestore from '@react-native-firebase/firestore';
import {utils} from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';

import ImagePicker from 'react-native-image-crop-picker';

import {addItem} from '../../services/firestore/addItem';
import Button from '../../components/Button/Button';
import TextButton from '../../components/Button/TextButton';
import Form from '../../components/form/Form';
import {TextStyles} from '../../styles/TextStyles';
import useDate from '../../hooks/useDate';
import {Colors} from '../../styles/Colors';
import ActivityIndicator from '../../components/ActivityIndicator';
import {updateItem} from '../../services/firestore/updateItem';
import {uploadFileFromURL} from '../../services/cloudStorage/uploadFileFromURL';
import {uploadFile} from '../../services/cloudStorage/uploadFile';
import {useAlertOnGoBack} from '../../hooks/useAlertOnGoBack';
import {alertOnGoBack} from '../../helpers/alertOnGoBack';
import BottomOptions from '../../components/BottomOptions';

export default function EditItemScreen({route, navigation}) {
  const {id, code, name, imageURL, quantity, cost, date, description} =
    route.params;

  console.log(id, 'id', name, 'name');

  const refRBSheet = useRef();

  const [image, setImage] = useState(null);

  const [imageEditted, setImageEditted] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(image, 'mono');

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    defaultValues: {
      code: code,
      name: name,
      quantity: quantity,
      cost: cost,
      date: new Date(date),
      description: description,
    },
  });

  console.log(errors, 'errores');

  const openSheetBottom = () => {
    refRBSheet.current.open();
  };

  const closeSheetBottom = () => {
    refRBSheet.current.close();
  };

  const cleanPhotos = () => {
    ImagePicker.cleanPermanentFiles() //cleanPermanentFiles
      .then(() => {
        console.log('removed all images from pictures directory');
      })
      .catch(e => {
        alert(e);
      });
  };

  const chosePhotoFromGallery = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    })
      .then(img => {
        console.log(img, 'imageFromGallery');
        setImage(img.path);
        setImageEditted(true);
        closeSheetBottom();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const takePhoto = () => {
    ImagePicker.openCamera({
      width: 400,
      height: 400,
      cropping: true,
    })
      .then(img => {
        console.log(img, 'imageFromCamera');
        setImage(img.path);
        setImageEditted(true);
        closeSheetBottom();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const renderImage = () => {
    if (image) {
      return <Image source={{uri: image}} style={styles.img} />;
    } else if (imageURL) {
      return <Image source={{uri: imageURL}} style={styles.img} />;
    } else {
      return (
        <Image
          source={require('../../assets/icons/ic_camera.png')}
          style={styles.splashImg}
        />
      );
    }
  };

  const uploadImage = async pathRef => {
    const reference = storage().ref(pathRef);
    // uploads file
    await reference.putFile(image);
  };

  const handleSave = async data => {
    setLoading(true);

    //const reference = storage().refFromURL(imageURL);

    //console.log(reference, 'Maria');

    if (image) {
      const pathRef = `/images/InventoryApp_Image_${data.name}_${Math.floor(
        Math.random() * 1500,
      )}.jpg`;
      const url = await uploadFile(pathRef, image);
      data.imageURL = url;
    } else if (imageURL) {
      data.imageURL = imageURL;
    }

    if (data.hasOwnProperty('cost')) data.cost = Number(data.cost);

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
      _formValues.code !== code ||
      _formValues.name !== name ||
      _formValues.cost !== cost ||
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
          <View style={styles.head}>
            {/* <Text style={TextStyles.title}>Zapatos Rojos</Text> */}
            <Pressable
              style={styles.imgCont}
              onPress={openSheetBottom}
              android_ripple={{color: Colors.darkGray}}>
              {renderImage()}
              <Pressable
                style={styles.editBtn}
                onPress={openSheetBottom}
                android_ripple={{color: Colors.darkGray}}>
                <Image source={require('../../assets/icons/ic_pencil.png')} />
              </Pressable>
            </Pressable>
          </View>
          <Form
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
        <RBSheet
          ref={refRBSheet}
          height={170}
          animationType={'fade'}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: 'rgba(0,0,0,0.5)',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}>
          <View style={styles.sheetContainer}>
            <Text style={styles.sheetTitle}>Foto del producto</Text>
            <View style={styles.sheetWrapper}>
              <Pressable
                style={styles.sheetBtn}
                android_ripple={{color: Colors.mediumGray}}
                onPress={takePhoto}>
                <View style={styles.sheetBtnWrapp}>
                  <Image
                    style={styles.sheetOptIcon}
                    source={require('../../assets/icons/ic_camera.png')}
                  />
                </View>
                <Text style={styles.sheetIconTxt}>Cámara</Text>
              </Pressable>
              <Pressable
                style={styles.sheetBtn}
                android_ripple={{color: Colors.mediumGray}}
                onPress={chosePhotoFromGallery}>
                <View style={styles.sheetBtnWrapp}>
                  <Image
                    style={styles.sheetOptIcon}
                    source={require('../../assets/icons/ic_gallery.png')}
                  />
                </View>
                <Text style={styles.sheetIconTxt}>Galería</Text>
              </Pressable>
            </View>
          </View>
        </RBSheet>
      </View>
    </ActivityIndicator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollCont: {},
  head: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 16,
  },
  imgCont: {
    width: 200,
    height: 200,
    backgroundColor: Colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  img: {
    //flex: 1,
    //resizeMode: 'contain',
    width: 200,
    height: 200,
    borderRadius: 15,
    //backgroundColor: 'blue',
  },
  splashImg: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    //backgroundColor: 'blue',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 16,
    marginHorizontal: 20,
  },
  editBtn: {
    //alignSelf: 'flex-end',
    position: 'absolute',
    bottom: -10,
    right: -10,
    //margin: -16,
    backgroundColor: Colors.primaryBlue,
    padding: 8,
    borderWidth: 1,
    borderRadius: 100,
  },
  sheetContainer: {
    marginLeft: 8,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    marginLeft: 16,
  },
  sheetWrapper: {
    flexDirection: 'row',
    marginVertical: 0,
    marginLeft: 8,
    //backgroundColor: 'blue',
  },
  sheetBtn: {
    marginRight: 24,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sheetBtnWrapp: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 100,
  },
  sheetOptIcon: {
    width: 25,
    height: 25,
  },
  sheetIconTxt: {
    marginTop: 4,
  },
});
