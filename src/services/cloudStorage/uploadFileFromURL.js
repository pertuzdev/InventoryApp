import storage from '@react-native-firebase/storage';

export const uploadFileFromURL = async (pathURL, fileLocation) => {
  //console.log(pathURL, fileLocation, 'AIUDA');
  try {
    const reference = storage().refFromURL(pathURL);
    console.log(reference, 'reference');
    await reference.putFile(fileLocation);
    console.log('File updated!');
  } catch (e) {
    console.log(e);
  }

  //const url = await storage().refFromURL(pathURL).getDownloadURL();

  // return url;
};
