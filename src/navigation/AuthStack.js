import React, {useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';

import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Stack = createStackNavigator();

const AuthStack = () => {
  console.log('patricio estrella');

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '682455905560-i5q39cbtod6n6itoseiifes72hkeq36v.apps.googleusercontent.com',
    });
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: '#fff'},
      }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
