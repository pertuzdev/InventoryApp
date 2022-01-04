import firestore from '@react-native-firebase/firestore';

export const deleteItem = id => {
  firestore()
    .collection('Items')
    .doc(id)
    .delete()
    .then(() => {
      console.log('Item deleted!');
    });
};
