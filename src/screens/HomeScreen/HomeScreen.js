import React, {useEffect, useState} from 'react';
import {View, ToastAndroid, StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import useGetTotals from '../../hooks/useGetTotals';
import useItems from '../../hooks/useItems';

import Button from '../../components/Button/Button';
import Header from '../../components/Header';
import ItemList from '../../components/ItemList';
import {calculateTotalInArr} from '../../helpers/calculateTotalInArr';
import {roundNumber} from '../../helpers/math';

const w = Dimensions.get('window').width;

export default function HomeScreen({route, navigation}) {
  const {items, loading} = useItems();
  const {totalQty, totalCost} = useGetTotals({items});

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
  }, [route.params?.message, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        style={styles.header}
        onSearchBarPress={handleSearchBarPress}
        totalQty={totalQty}
        totalCost={totalCost}
      />

      <View style={styles.content}>
        <ItemList items={items} loading={loading} navigation={navigation} />
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
    marginHorizontal: 16,
    marginBottom: 16,
    paddingTop: 4,
  },
});
