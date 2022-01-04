import firestore, {query, where} from '@react-native-firebase/firestore';

const checkItem = async (newCode, id) => {
  return firestore()
    .collection('Items')
    .where('code', '==', newCode)
    .get()
    .then(querySnapshot => {
      //console.log(querySnapshot.docs, 'Kim Im a bitch');
      let alreadyExist = false;
      if (querySnapshot.docs.length !== 0) {
        if (querySnapshot.docs[0].id !== id) alreadyExist = true;
      }

      //console.log(alreadyExist, 'Kim');
      //callback(alreadyExist);
      return alreadyExist;
    })
    .catch(e => {
      console.log(e);
    });
};

export default checkItem;
