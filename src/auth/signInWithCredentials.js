import auth from '@react-native-firebase/auth';

export const signInWithCredentials = async ({
  email,
  password,
  setUserRequest,
}) => {
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
