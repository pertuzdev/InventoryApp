import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  Image,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';

import storage from '@react-native-firebase/storage';
import * as Progress from 'react-native-progress';

export default function UploadScreen() {
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  console.log(image2, 'storage');
  console.log(image, 'caches');

  const imgStorage =
    'file:///storage/emulated/0/Android/data/com.inventoryapp/files/Pictures/97c8ff28-c9e1-41b9-9890-77ec12576b02.jpg';
  const imgCache =
    'file:///data/user/0/com.inventoryapp/cache/rn_image_picker_lib_temp_c604c4c0-b0e2-4926-a83f-3748b5018b60.jpg';

  const cleanUp = () => {
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
      width: 300,
      height: 400,
      cropping: true,
    }).then(img => {
      console.log(img, 'img');
      setImage2(img.path);
      cleanUp();
    });
  };

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(img => {
      console.log(img);
      setImage2(img.path);
    });
  };

  const selectImage = () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.assets[0].uri};
        console.log(source, 'source');
        setImage(source);
      }
    });
  };

  const uploadImage = async () => {
    const {uri} = image;
    console.log(uri, 'uri');
    /* const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    setUploading(true);
    setTransferred(0);
    const task = storage().ref(filename).putFile(uploadUri);
    // set progress state
    task.on('state_changed', snapshot => {
      setTransferred(
        Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000,
      );
    });
    try {
      await task;
    } catch (e) {
      console.error(e);
    }
    setUploading(false);
    Alert.alert(
      'Photo uploaded!',
      'Your photo has been uploaded to Firebase Cloud Storage!',
    );
    setImage(null); */
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.selectButton}
        onPress={chosePhotoFromGallery}>
        <Text style={styles.buttonText}>Pick an from gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.selectButton}
        onPress={takePhotoFromCamera}>
        <Text style={styles.buttonText}>Take a photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.selectButton} onPress={selectImage}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        {true ? <Image source={{uri: image2}} style={styles.imageBox} /> : null}
        {uploading ? (
          <View style={styles.progressBarContainer}>
            <Progress.Bar progress={transferred} width={300} />
          </View>
        ) : (
          <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
            <Text style={styles.buttonText}>Upload image</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#bbded6',
  },
  selectButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#8ac6d1',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  uploadButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#ffb6b9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center',
  },
  progressBarContainer: {
    marginTop: 20,
  },
  imageBox: {
    width: 300,
    height: 300,
  },
});
