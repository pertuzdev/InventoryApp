import React, {createContext, useState} from 'react';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  //console.log(user, 'oli');

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        googleLogin: async () => {
          try {
            // Get the users ID token
            const {idToken} = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            await auth()
              .signInWithCredential(googleCredential)
              .catch(error => {
                console.log('Something went wrong with sign up: ', error);
              });
          } catch (error) {
            console.log({error});
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
            await GoogleSignin.revokeAccess();
          } catch (e) {
            console.log(e, 'Logout error');
          }
        },
        register: async (email, password) => {
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
                  });
              })

              .catch(error => {
                console.log('Error to sign up: ', error);
              });
          } catch (error) {
            console.log(error);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
