import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

import {FlatList, StyleSheet, Text, View} from 'react-native';
import CardItem from './CardItem';
import useItems from '../hooks/useItems';
import {TextStyles} from '../styles/TextStyles';
import {SearchBar} from 'react-native-screens';

export default function ItemList({navigation, items, loading}) {
  //console.log(items[0].id, 'rosé');
  if (loading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <>
      {items.length === 0 ? (
        <View style={styles.noItems}>
          <Text style={[styles.placeholder, TextStyles.placeholder]}>
            No hay productos agregados
          </Text>
        </View>
      ) : (
        <FlatList
          data={items}
          ListFooterComponentStyle={{paddingBottom: 32}}
          renderItem={({item}) => (
            <CardItem
              key={item.id}
              id={item.id}
              code={item.code}
              name={item.name}
              imageURL={item.imageURL}
              quantity={item.quantity}
              cost={item.cost}
              date={item.date}
              description={item.description}
              navigation={navigation}
            />
          )}
          keyExtractor={item => item.id}
        />
      )}
    </>
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
  noItems: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {},
  btnContainer: {
    padding: 16,
  },
});
