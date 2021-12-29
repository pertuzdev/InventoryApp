import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

import {FlatList, StyleSheet, Text, View} from 'react-native';
import CardItem from './CardItem';
import useItems from '../hooks/useItems';
import {TextStyles} from '../styles/TextStyles';
import {SearchBar} from 'react-native-screens';

export default function ItemList({items, loading}) {
  if (loading) {
    return <Text>Cargando...</Text>;
  }

  if (!items) {
    return (
      <View>
        <Text style={[styles.placeholder, TextStyles.placeholder]}>
          No hay productos agregados
        </Text>
      </View>
    );
  }

  return (
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
