import React, {useEffect, useState} from 'react';
import {View, ToastAndroid, StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Button from '../../components/Button/Button';
import Header from '../../components/Header';
import ItemList from '../../components/ItemList';
import useItems from '../../hooks/useItems';
import {Colors} from '../../styles/Colors';

const w = Dimensions.get('window').width;

export default function HomeScreen({route, navigation}) {
  const {items, loading} = useItems();

  console.log(items, 'items');

  const [totalQty, setTotalQty] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [search, setSearch] = useState('');

  console.log(totalQty, totalCost, 'Sheary Tan');

  const showToast = (message = '') => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
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
      navigation.setParams({message: ''});
    }
    if (items.length > 0) {
      const quantArr = items.map(item => item.quantity);
      const cost = items.map(item => item.cost * item.quantity);

      const sumReducer = (prev, curr) => prev + curr;

      setTotalQty(quantArr.reduce(sumReducer));
      setTotalCost(
        Math.round((cost.reduce(sumReducer) + Number.EPSILON) * 100) / 100,
      );
    } else {
      setTotalQty(0);
      setTotalCost(0);
    }
  }, [route.params?.message, items, navigation]);

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
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  button: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
    elevation: 8,
  },
  btnContainer: {
    position: 'absolute',
    width: w - 32,
    bottom: 8,
    left: '50%',
    marginLeft: (w - 32) / -2,

    //marginHorizontal: 16,
    //marginBottom: 16,
  },
});
