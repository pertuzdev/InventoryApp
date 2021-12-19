import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CreateItemScreen from '../screens/CreateItemScreen.js/CreateItemScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: '#fff'},
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateItem"
        component={CreateItemScreen}
        options={{title: 'Crear Producto'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
