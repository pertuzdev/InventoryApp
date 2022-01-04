import storage from '@react-native-firebase/storage';

export const deleteFileFromURL = async pathURL => {
  try {
    const reference = storage().refFromURL(pathURL);
    await reference.delete();
    console.log('File deleted!');
  } catch (e) {
    console.log(e);
  }
};
