import React from 'react';
import {FlatList, Text, View} from 'react-native';

import {styles} from './ItemList.styles';
import {TextStyles} from '../../styles/globalStyles';

import CardItem from '../CardItem/CardItem';

export default function ItemList({navigation, items, loading}) {
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
