import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_GOOGLE_FAIL,
  USER_SIGNIN_GOOGLE_REQUEST,
  USER_SIGNIN_GOOGLE_SUCCESS,
  USER_SIGNOUT_REQUEST,
  USER_SIGNOUT_SUCCESS,
  USER_SIGNOUT_FAIL,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAIL,
  RESET_ERROR,
} from '../../helpers/constants/authConstants';

export const signInWithCredentials = async ({email, password, dispatch}) => {
  dispatch({type: USER_SIGNIN_REQUEST});
  try {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => dispatch({type: USER_SIGNIN_SUCCESS}))
      .catch(error => dispatch({type: USER_SIGNIN_FAIL, payload: {error}}));
  } catch (e) {
    console.log({[USER_SIGNIN_FAIL]: e});
    dispatch({type: USER_SIGNIN_FAIL, payload: {error: null}});
  }
};

export const signInWithGoogle = async ({dispatch}) => {
  dispatch({type: USER_SIGNIN_GOOGLE_REQUEST});
  try {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    await auth()
      .signInWithCredential(googleCredential)
      .then(() => dispatch({type: USER_SIGNIN_GOOGLE_SUCCESS}))
      .catch(error => {
        console.log('Something went wrong with sign up: ', error);
        dispatch({type: USER_SIGNIN_GOOGLE_FAIL, payload: {error}});
      });
  } catch (error) {
    console.log({[USER_SIGNIN_GOOGLE_FAIL]: error});
    dispatch({type: USER_SIGNIN_GOOGLE_FAIL, payload: {error: null}});
  }
};

export const signUpWithCredentials = async ({email, password, dispatch}) => {
  dispatch({type: USER_SIGNUP_REQUEST});
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
            dispatch({type: USER_SIGNUP_FAIL, payload: {error}});
          });

        dispatch({type: USER_SIGNUP_SUCCESS});
      })

      .catch(error => {
        console.log('Error to sign up: ', error);
        dispatch({type: USER_SIGNUP_FAIL, payload: {error}});
      });
  } catch (error) {
    console.log({[USER_SIGNUP_FAIL]: error});
    dispatch({type: USER_SIGNUP_FAIL, payload: {error: null}});
  }
};

export const signOut = async ({dispatch}) => {
  dispatch({type: USER_SIGNOUT_REQUEST});
  try {
    await auth().signOut();
    await GoogleSignin.revokeAccess().then(() =>
      dispatch({type: USER_SIGNOUT_SUCCESS}),
    );
  } catch (e) {
    console.log(e, 'Logout error');
    dispatch({type: USER_SIGNOUT_FAIL});
  }
};

export const setUser = ({user, dispatch}) => {
  user
    ? dispatch({type: GET_CURRENT_USER_SUCCESS, payload: {user}})
    : dispatch({type: GET_CURRENT_USER_FAIL});
};

export const resetUserError = ({dispatch}) => {
  dispatch({type: RESET_ERROR});
};
