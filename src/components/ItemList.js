import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

import {FlatList, StyleSheet, Text, View} from 'react-native';
import CardItem from './CardItem';
import useItems from '../hooks/useItems';
import {TextStyles} from '../styles/TextStyles';

export default function ItemList() {
  const {items, loading} = useItems();

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  return items ? (
    <FlatList
      data={items}
      renderItem={({item}) => (
        <CardItem
          key={item.id}
          code={item.code}
          name={item.name}
          imageURL={item.imageURL}
          quantity={item.quantity}
          cost={item.cost}
          date={item.date}
          description={item.description}
        />
      )}
      keyExtractor={item => item.id}
    />
  ) : (
    <View>
      <Text style={[styles.placeholder, TextStyles.placeholder]}>
        No hay productos agregados
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  placeholder: {
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  button: {},
  btnContainer: {
    padding: 16,
  },
});
