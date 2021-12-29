import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {useForm} from 'react-hook-form';

import firestore from '@react-native-firebase/firestore';
import {utils} from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';

import ImagePicker from 'react-native-image-crop-picker';

import {addItem} from '../../services/addItem';
import Button from '../../components/Button/Button';
import TextButton from '../../components/Button/TextButton';
import Form from '../../components/form/Form';
import {TextStyles} from '../../styles/TextStyles';
import useDate from '../../hooks/useDate';
import {Colors} from '../../styles/Colors';

export default function CreateItemScreen({navigation}) {
  const dateCaptured = new Date();

  const [image, setImage] = useState(null);

  console.log(image, 'mono');

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
        console.log(img, 'image');
        setImage(img.path);
        //cleanPhotos();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const uploadImage = async pathRef => {
    const reference = storage().ref(pathRef);
    // uploads file
    await reference.putFile(image);
  };

  const handleSave = async data => {
    if (image) {
      const pathRef = `/images/InventoryApp_Image_${data.name}_${Math.floor(
        Math.random() * 1500,
      )}.jpg`;
      await uploadImage(pathRef);

      const url = await storage().ref(pathRef).getDownloadURL();
      data.imageURL = url;
    }

    data.date = firestore.Timestamp.fromDate(data.date);
    console.log(data, 'dataToSave');

    addItem(data);

    cleanPhotos();

    navigation.navigate('Home', {message: 'Producto creado!'});
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollCont}>
        <View style={styles.head}>
          {/* <Text style={TextStyles.title}>Zapatos Rojos</Text> */}
          <Pressable
            style={styles.imgCont}
            onPress={chosePhotoFromGallery}
            android_ripple={{color: Colors.darkGray}}>
            {image ? (
              <Image source={{uri: image}} style={styles.img} />
            ) : (
              <Image
                source={require('../../assets/icons/ic_camera.png')}
                style={styles.splashImg}
              />
            )}
            <Pressable
              style={styles.editBtn}
              onPress={chosePhotoFromGallery}
              android_ripple={{color: Colors.darkGray}}>
              <Image source={require('../../assets/icons/ic_pencil.png')} />
            </Pressable>
          </Pressable>
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
});
