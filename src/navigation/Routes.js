import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AuthContext from '../context/AuthContext';

import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

const Routes = () => {
  const {userRequest, setUserRequest} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  console.log(userRequest, 'user');

  const onAuthStateChanged = authUser => {
    setUserRequest(prev => ({...prev, user: authUser}));
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {userRequest.user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
