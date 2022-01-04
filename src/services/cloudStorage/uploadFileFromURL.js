import storage from '@react-native-firebase/storage';

export const uploadFileFromURL = async (pathURL, fileLocation) => {
  const reference = storage().refFromURL(pathURL);
  await reference.putFile(fileLocation);
  console.log('File updated!');

  const url = await storage().ref(pathURL).getDownloadURL();

  return url;
};
