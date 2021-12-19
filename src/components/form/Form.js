import * as React from 'react';
import {Text, View, StyleSheet, TextInput, Pressable} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
//import {Picker} from '@react-native-picker/picker';

import ErrorMessage from './ErrorMessage';
import {Colors} from '../../styles/Colors';
import {TextStyles} from '../../styles/TextStyles';
import {ScrollView} from 'react-native-gesture-handler';
import TextButton from '../Button/TextButton';
import Button from '../Button/Button';

export default function Form({control, errors}) {
  const onSubmit = data => {
    //console.log(businessList.slice(-1)[0].id, 'ID');
    //data.id = businessList.slice(-1)[0].id + 1;
    //console.log(data, 'TIRAME_DATOS');
    //businessList.push(data);
    //reset();
    console.log('Submitió!!');
  };

  /* const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  }; */

  console.log('errors', errors);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Código</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Escriba el código del producto..."
          />
        )}
        name="code"
        rules={{
          required: 'Este campo es requerido',
        }}
      />
      <ErrorMessage errors={errors} name="code" />

      <Text style={styles.label}>Nombre</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Escriba el nombre del producto..."
          />
        )}
        name="name"
        rules={{required: 'Este campo es requerido'}}
      />
      <ErrorMessage errors={errors} name="name" />

      {/*<Text style={styles.label}>Categoría</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Picker
            onBlur={onBlur}
            selectedValue={value}
            onValueChange={onChange}>
            {categoryList.map(category => (
              <Picker.Item
                key={category.id}
                label={category.name}
                value={category.name}
              />
            ))}
          </Picker>
        )}
        name="category"
        rules={{required: 'Este campo es requerido'}}
      />
      <ErrorMessage errors={errors} name="category" />*/}

      <Text style={styles.label}>Costo (opcional)</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Escriba el precio de compra del producto..."
          />
        )}
        name="cost"
        rules={{
          required: 'Este campo es requerido',
          pattern: {
            value: /^\d+$/,
            message: 'Ingrese un número de teléfono válido',
          },
        }}
      />
      <ErrorMessage errors={errors} name="cost" />

      <Text style={styles.label}>Fecha de ingreso</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="date"
        rules={{required: 'Este campo es requerido'}}
      />
      <ErrorMessage errors={errors} name="date" />

      {/* <Text style={styles.label}>Correo electrónico</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
        rules={{
          required: 'Este campo es requerido',
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Ingrese un correo electrónico válido', // JS only: <p>error message</p> TS only support string
          },
        }}
      />
      <ErrorMessage errors={errors} name="email" /> */}

      {/* <Text style={styles.label}>Sitio Web (opcional)</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="website"
        rules={{
          required: false,
          pattern: {
            value:
              /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
            message: 'Ingrese un sitio web válido', // JS only: <p>error message</p> TS only support string
          },
        }}
      />
      <ErrorMessage errors={errors} name="website" /> */}

      <Text style={styles.label}>Descripción</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            multiline
            numberOfLines={5}
            style={styles.inputArea}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Escriba la descripción del producto..."
          />
        )}
        name="description"
        rules={{required: 'Este campo es requerido'}}
      />
      <ErrorMessage errors={errors} name="description" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flexGrow: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  label: {
    margin: 20,
    marginBottom: 16,
    marginLeft: 0,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: Colors.darkGray,
  },

  button: {
    marginTop: 40,
    marginBottom: 40,
    marginLeft: 32,
    marginRight: 32,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: Colors.primaryRed,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  input: {
    backgroundColor: 'white',
    borderColor: Colors.darkGray,
    borderWidth: 1,
    height: 40,
    padding: 10,
    borderRadius: 15,
  },
  inputArea: {
    backgroundColor: 'white',
    borderColor: Colors.zircon,
    textAlignVertical: 'top',
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
});
