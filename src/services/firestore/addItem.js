import firestore from '@react-native-firebase/firestore';

export const addItem = item => {
  firestore()
    .collection('Items')
    .add(item)
    .then(() => {
      console.log('Item added!');
    })
    .catch(e => {
      console.log(e);
    });
};
