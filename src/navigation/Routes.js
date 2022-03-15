import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import {useUser} from '../hooks/useUser';

import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import {ItemsProvider} from '../context/ItemsContext';

const Routes = () => {
  const {user, setCurrentUser} = useUser();
  /*  const {userRequest, setUserRequest} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  console.log(userRequest, 'user');

  const onAuthStateChanged = authUser => {
    setUserRequest(prev => ({...prev, user: authUser}));
    if (initializing) setInitializing(false);
  }; */

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(authUser =>
      setCurrentUser({authUser}),
    );
    return subscriber; // unsubscribe on unmount
  }, []);

  // if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? (
        <ItemsProvider>
          <HomeStack />
        </ItemsProvider>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default Routes;
