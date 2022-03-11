import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const signInWithGoogle = async ({setUserRequest}) => {
  setUserRequest(prev => ({...prev, loading: true}));
  try {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    await auth()
      .signInWithCredential(googleCredential)
      .then(() => setUserRequest(prev => ({...prev, loading: false})))
      .catch(error => {
        console.log('Something went wrong with sign up: ', error);
        setUserRequest(prev => ({
          ...prev,
          loading: false,
          userStatusError: error,
        }));
      });
  } catch (error) {
    console.log({error});
    setUserRequest(prev => ({
      ...prev,
      loading: false,
    }));
  }
};
