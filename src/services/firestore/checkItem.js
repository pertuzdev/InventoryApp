import firestore, {query, where} from '@react-native-firebase/firestore';

const checkItem = async (newCode, id) => {
  return firestore()
    .collection('Products')
    .where('code', '==', newCode)
    .get()
    .then(querySnapshot => {
      //console.log(querySnapshot.docs);
      let alreadyExist = false;
      if (querySnapshot.docs.length !== 0) {
        if (querySnapshot.docs[0].id !== id) alreadyExist = true;
      }
      return alreadyExist;
    })
    .catch(e => {
      console.log(e);
    });
};

export default checkItem;
