import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const signOut = async ({setUserRequest}) => {
  setUserRequest(prev => ({...prev, loading: true}));
  try {
    await auth().signOut();
    await GoogleSignin.revokeAccess().then(() =>
      setUserRequest({user: null, loading: false, userNotFound: false}),
    );
  } catch (e) {
    console.log(e, 'Logout error');
    setUserRequest(prev => ({...prev, loading: false}));
  }
};
