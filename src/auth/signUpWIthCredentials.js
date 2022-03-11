import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const signUpWithCredentials = async ({
  email,
  password,
  setUserRequest,
}) => {
  setUserRequest(prev => ({...prev, loading: true}));
  try {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firestore()
          .collection('users')
          .doc(auth().currentUser.uid)
          .set({
            firstName: '',
            lastName: '',
            email,
            createdAt: firestore.Timestamp.fromDate(new Date()),
            userImg: null,
          })
          .catch(error => {
            console.log('Error when trying to add user to firestore: ', error);
            setUserRequest(prev => ({...prev, loading: false}));
          });

        setUserRequest(prev => ({...prev, loading: false}));
      })

      .catch(error => {
        console.log('Error to sign up: ', error);
        setUserRequest(prev => ({
          ...prev,
          loading: false,
          userStatusError: error,
        }));
      });
  } catch (error) {
    console.log(error);
    setUserRequest(prev => ({...prev, loading: false}));
  }
};
