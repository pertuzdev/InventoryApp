import React, {useState} from 'react';

import ImagePicker from 'react-native-image-crop-picker';

export default function useImagePick(actionAfterImage) {
  const [image, setImage] = useState(null);

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
        actionAfterImage();
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
        actionAfterImage();
      })
      .catch(e => {
        console.log(e);
      });
  };

  return {image, takePhoto, chosePhotoFromGallery, cleanPhotos};
}
