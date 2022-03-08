import firestore from '@react-native-firebase/firestore';

export const addItem = async item => {
  return firestore()
    .collection('Products')
    .add(item)
    .then(() => {
      console.log('Product added!');
    })
    .catch(e => {
      console.log(e);
    });
};
