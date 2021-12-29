import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import ItemList from '../../components/ItemList';
import useItems from '../../hooks/useItems';
import SearchHeader from '../../components/SearchHeader';
import {Colors} from '../../styles/Colors';

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
        <ItemList items={itemsFiltered || items} loading={loading} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },

  notFoundWrapper: {
    paddingTop: 24,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  notFoundtext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.darkGray,
  },
});
