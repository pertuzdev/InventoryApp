import firestore from '@react-native-firebase/firestore';

const getItems = callback => {
  const subscriber = firestore()
    .collection('Items')
    .onSnapshot(querySnapshot => {
      const itemsArr = [];

      querySnapshot.forEach(documentSnapshot => {
        itemsArr.push({
          ...documentSnapshot.data(),
          id: documentSnapshot.id,
        });
      });

      callback(itemsArr);
    });
  return subscriber;
};

export default getItems;
