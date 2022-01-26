import React, {createContext, useState} from 'react';

import auth from '@react-native-firebase/auth';

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
            console.log(e, 'LoginError');
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
            console.log({error}, 'errorcat');
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
      }}>
      {children}
    </AuthContext.Provider>
  );
};
