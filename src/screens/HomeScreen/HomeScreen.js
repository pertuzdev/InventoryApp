import React, {useEffect} from 'react';
import {View, ToastAndroid} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './HomeScreen.styles';

import useGetTotals from '../../hooks/useGetTotals';
import {useItems} from '../../hooks/useItems';

import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import ItemList from '../../components/ItemList/ItemList';

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
