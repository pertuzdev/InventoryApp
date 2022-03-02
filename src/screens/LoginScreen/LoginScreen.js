import React, {useContext, useEffect} from 'react';
import {View, ScrollView, Image, ToastAndroid} from 'react-native';

import {styles} from './LoginScreen.styles';

import {AuthContext} from '../../navigation/AuthProvider';

import Button from '../../components/Button/Button';

import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {useForm} from 'react-hook-form';
import AuthForm from '../../components/Form/AuthForm';

const LoginScreen = ({navigation}) => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {googleLogin, login} = useContext(AuthContext);

  const handleSave = ({email, password}) => login(email, password);

  return (
    <ScrollView>
      <View style={styles.logWp}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>

      <AuthForm control={control} errors={errors} />

      <View style={styles.btnWrapper}>
        <Button label="Ingresar" onPress={handleSubmit(handleSave)} />
      </View>

      <View style={styles.btnWp}>
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={() => googleLogin()}
        />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
