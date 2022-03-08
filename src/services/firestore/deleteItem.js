import firestore from '@react-native-firebase/firestore';

export const deleteItem = id => {
  firestore()
    .collection('Products')
    .doc(id)
    .delete()
    .then(() => {
      console.log('Product deleted!');
    });
};
