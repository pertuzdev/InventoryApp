import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';

import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  console.log(user, initializing, 'paddinson');

  const onAuthStateChanged = authUser => {
    console.log(authUser, 'authUser');
    setUser(authUser);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user?.email === 'antonio.pertuz01@gmail.com' ||
      user?.email === 'antonio.pertuz99@gmail.com' ? (
        <HomeStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default Routes;
