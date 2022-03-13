import {useContext} from 'react';

import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';

import AuthContext from '../services/auth/UserContext';

export default function useAuth() {
  const {userRequest, setUserRequest} = useContext(AuthContext);

  const register = async (email, password) => {
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
              console.log(
                'Error when trying to add user to firestore: ',
                error,
              );
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

  const login = async (email, password) => {
    setUserRequest(prev => ({...prev, loading: true}));
    try {
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => setUserRequest(prev => ({...prev, loading: false})));
    } catch (e) {
      console.log({e});
      setUserRequest(prev => ({
        ...prev,
        loading: false,
        userStatusError: e,
      }));
    }
  };

  const googleLogin = async () => {
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

  const logout = async () => {
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

  return {register, login, googleLogin, logout, userRequest};
}
