import storage from '@react-native-firebase/storage';

export const uploadFile = async (pathRef, fileLocation) => {
  const reference = storage().ref(pathRef);
  await reference.putFile(fileLocation);
  console.log('File uploaded!');

  const url = await storage().ref(pathRef).getDownloadURL();

  return url;
};
