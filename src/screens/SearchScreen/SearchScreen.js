import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './SearchScreen.styles';

import useItems from '../../hooks/useItems';

import ItemList from '../../components/ItemList/ItemList';
import SearchHeader from '../../components/SearchHeader/SearchHeader';

export default function SearchScreen({route, navigation}) {
  const {items, loading} = useItems();

  const [itemsFiltered, setItemsFiltered] = useState('');
  const [notFound, setNotFound] = useState(false);

  const handleSearch = searchedText => {
    const newItems = items.filter(
      item =>
        item.name.toLowerCase().includes(searchedText.toLowerCase()) ||
        item.code.toLowerCase().includes(searchedText.toLowerCase()),
    );

    newItems.length === 0 ? setNotFound(true) : setNotFound(false);

    setItemsFiltered(newItems);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader navigation={navigation} handleSearch={handleSearch} />
      {!notFound ? (
        <ItemList
          items={itemsFiltered || items}
          loading={loading}
          navigation={navigation}
        />
      ) : (
        <View style={styles.notFoundWrapper}>
          <Text style={styles.notFoundtext}>
            No se encontraron resultados. Prueba con otro término.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}
