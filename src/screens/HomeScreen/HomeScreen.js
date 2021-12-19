import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../components/Button/Button';
import CardItem from '../../components/CardItem';
import Header from '../../components/Header';

import {TextStyles} from '../../styles/TextStyles';

export default function HomeScreen({navigation}) {
  const handlePress = () => {
    navigation.navigate('CreateItem');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header} />
      {/*<View>
        <Text style={[styles.placeholder, TextStyles.placeholder]}>
          No hay productos agregados
        </Text>
      </View>*/}
      <View style={styles.content}>
        <CardItem />
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
