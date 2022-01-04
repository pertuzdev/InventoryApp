import React, {useEffect, useState} from 'react';
import {View, Text, ToastAndroid, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import firestore from '@react-native-firebase/firestore';

import Button from '../../components/Button/Button';
import CardItem from '../../components/CardItem';
import Header from '../../components/Header';

import {TextStyles} from '../../styles/TextStyles';
import ItemList from '../../components/ItemList';
import useItems from '../../hooks/useItems';
import checkItem from '../../services/firestore/checkItem';

export default function HomeScreen({route, navigation}) {
  const {items, loading} = useItems();

  const [totalQty, setTotalQty] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [search, setSearch] = useState('');

  //console.log(totalQty, totalCost, 'Sheary Tan');

  const showToast = (message = '') => {
    ToastAndroid.show(message, ToastAndroid.LONG);
  };

  const handlePress = () => {
    navigation.navigate('CreateItem');
  };

  const handleSearchBarPress = () => {
    console.log('Searchbar pressed');
    navigation.navigate('Search');
  };

  useEffect(() => {
    if (route.params?.message) {
      showToast(route.params.message);
    }
    if (items.length > 0) {
      const quantArr = items.map(item => item.quantity);
      const cost = items.map(item => item.cost);

      const sumReducer = (prev, curr) => prev + curr;

      setTotalQty(quantArr.reduce(sumReducer));
      setTotalCost(
        Math.round((cost.reduce(sumReducer) + Number.EPSILON) * 100) / 100,
      );
    }
  }, [route.params?.message, items]);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        style={styles.header}
        onSearchBarPress={handleSearchBarPress}
        totalQty={totalQty}
        totalCost={totalCost}
      />

      <View style={styles.content}>
        <ItemList
          handleSearch={search}
          items={items}
          loading={loading}
          navigation={navigation}
        />
      </View>

      <View style={styles.btnContainer}>
        <Button
          size="lg"
          style={styles.button}
          navigation={navigation}
          label="Crear Producto"
          onPress={handlePress}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    margin: 16,
    marginTop: 20,
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
