import firestore from '@react-native-firebase/firestore';

const checkItem = async (newCode, callback) => {
  return firestore()
    .collection('Items')
    .where('code', '==', newCode)
    .get()
    .then(querySnapshot => {
      //console.log(querySnapshot.docs, 'Kim Im a bitch');
      let alreadyExist = false;
      if (querySnapshot.docs.length !== 0) alreadyExist = true;

      //console.log(alreadyExist, 'Kim');
      //callback(alreadyExist);
      return alreadyExist;
    });
};

export default checkItem;
