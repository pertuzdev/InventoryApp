import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

import {FlatList, Text} from 'react-native';
import CardItem from './CardItem';
import useItems from '../hooks/useItems';

export default function ItemList() {
  const {items, loading} = useItems();

  if (loading) {
    return <Text>Cargando...</Text>;
  }
  return (
    <FlatList
      data={items}
      renderItem={({item}) => (
        <CardItem
          key={item.id}
          code={item.code}
          name={item.name}
          stock={item.stock}
          cost={item.cost}
          date={item.date}
          description={item.description}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
}
