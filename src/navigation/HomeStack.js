import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CreateItemScreen from '../screens/CreateItemScreen/CreateItemScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen/ItemDetailScreen';

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
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={ItemDetailScreen}
        options={{title: 'Descripción del Producto'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
