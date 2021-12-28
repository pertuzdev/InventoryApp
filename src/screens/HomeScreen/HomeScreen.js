import React, {useEffect, useState} from 'react';
import {View, Text, ToastAndroid, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import firestore from '@react-native-firebase/firestore';

import Button from '../../components/Button/Button';
import CardItem from '../../components/CardItem';
import Header from '../../components/Header';

import {TextStyles} from '../../styles/TextStyles';
import ItemList from '../../components/ItemList';

export default function HomeScreen({route, navigation}) {
  const showToast = (message = '') => {
    ToastAndroid.show(message, ToastAndroid.LONG);
  };

  const handlePress = () => {
    navigation.navigate('CreateItem');
  };

  useEffect(() => {
    if (route.params?.message) {
      showToast(route.params.message);
    }
  }, [route.params?.message]);

  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header} />
      {/*<View>
        <Text style={[styles.placeholder, TextStyles.placeholder]}>
          No hay productos agregados
        </Text>
      </View>*/}
      <View style={styles.content}>
        <ItemList />
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
