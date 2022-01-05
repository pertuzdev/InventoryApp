import React, {useEffect} from 'react';
import {
  Image,
  Pressable,
  Alert,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../components/Button/Button';
import TextButton from '../../components/Button/TextButton';
import {formatDate} from '../../helpers/dates';
import {deleteFileFromURL} from '../../services/cloudStorage/deleteFileFromURL';
import {deleteItem} from '../../services/firestore/deleteItem';
import {Colors} from '../../styles/Colors';
import {TextStyles} from '../../styles/TextStyles';

export default function ItemDetailScreen({route, navigation}) {
  const {id, code, name, imageURL, quantity, cost, date, description} =
    route.params;

  console.log(route.params, 'id');

  const formatCost = () => {
    return cost / Math.floor(cost) === 1 ? `$ ${cost}.00` : `$ ${cost}`;
  };

  const normalizeDate = () => {
    const {standardDate} = formatDate({date: date.toDate()});
    return standardDate;
  };

  const goToEdit = () => {
    navigation.navigate('Edit', {
      id,
      code,
      name,
      imageURL,
      quantity,
      cost,
      date: date.toDate().toString(),
      description,
    });
  };

  const removeItem = () => {
    if (imageURL) deleteFileFromURL(imageURL);
    deleteItem(id);
    navigation.navigate('Home', {
      message: 'Producto eliminado',
    });
  };

  const fireAlert = () => {
    Alert.alert(
      'ELIMINAR PRODUCTO',
      '¿Estás seguro que deseas eliminar este producto?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Aceptar', onPress: () => removeItem()},
      ],
    );
  };

  const showToast = (message = '') => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  useEffect(() => {
    if (route.params?.message) {
      showToast(route.params.message);
      navigation.setParams({message: ''});
    }
  }, [route.params?.message, navigation]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollCont}>
        <View style={styles.head}>
          <Text style={[styles.title, TextStyles.title]}>{name}</Text>
          <View style={styles.imgCont}>
            {imageURL ? (
              <Image source={{uri: imageURL}} style={styles.img} />
            ) : (
              <Image
                source={require('../../assets/icons/ic_camera.png')}
                style={styles.splashImg}
              />
            )}
          </View>
        </View>
        <View style={styles.productInfo}>
          <View style={styles.infoRow}>
            <Text style={styles.productLabel}>Cantidad</Text>
            <Text style={styles.productTxt}>{quantity}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.productLabel}>Código</Text>
            <Text style={styles.productTxt}>{code}</Text>
          </View>
          {cost ? (
            <View style={styles.infoRow}>
              <Text style={styles.productLabel}>Costo</Text>
              <Text style={styles.productTxt}>{formatCost()}</Text>
            </View>
          ) : (
            <></>
          )}
          <View style={styles.infoRow}>
            <Text style={styles.productLabel}>Fecha de ingreso</Text>
            <Text style={styles.productTxt}>{normalizeDate()}</Text>
          </View>
          {description ? (
            <View style={styles.desc}>
              <Text style={styles.descLabel}>Descripción</Text>
              <Text style={styles.productTxt}>{description}</Text>
            </View>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
      <View style={styles.options}>
        <Button
          label="Eliminar"
          backgroundColor={Colors.red}
          onPressIn={fireAlert}
        />
        <Button label="Editar" onPress={goToEdit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollCont: {},
  head: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 16,
  },
  title: {
    marginBottom: 8,
  },
  imgCont: {
    width: 200,
    height: 200,
    backgroundColor: Colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  img: {
    //flex: 1,
    //resizeMode: 'contain',
    width: 200,
    height: 200,
    borderRadius: 15,
    //backgroundColor: 'blue',
  },
  splashImg: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    //backgroundColor: 'blue',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  productInfo: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  productLabel: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: Colors.darkGray,
  },
  descLabel: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: Colors.darkGray,
    marginBottom: 8,
  },
  productTxt: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: Colors.blackGray,
  },
});
