import React, {useContext} from 'react';
import {View, ScrollView, Image, TouchableOpacity, Text} from 'react-native';

import {useForm} from 'react-hook-form';

import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

import {styles} from './LoginScreen.styles';

import {alertOnFirebaseAuth} from '../../helpers/alerts/alertOnFirebaseAuth/alertOnFirebaseAuth';

import ActivityIndicator from '../../components/ActivityIndicator/ActivityIndicator';
import Button from '../../components/Button/Button';
import LoginForm from '../../components/Form/LoginForm';
import {useUser, useUserAuth} from '../../services/auth/useUser';

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

  const {login, googleLogin} = useUserAuth();

  const {user, loading, error, resetError} = useUser();

  const handleSave = ({email, password}) => login(email, password);

  if (error) {
    alertOnFirebaseAuth({
      action: () => {
        resetError();
      },
      alertTitle: error.code,
      alertBody: error.message,
    });
  }

  return (
    <ActivityIndicator loading={loading}>
      <ScrollView>
        <View style={styles.logWp}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>

        <LoginForm control={control} errors={errors} />

        <View style={styles.btnWrapper}>
          <Button
            label="Ingresar"
            size="lg"
            onPress={handleSubmit(handleSave)}
          />
        </View>

        <View style={styles.btnWp}>
          <GoogleSigninButton
            style={{width: 250, height: 53}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={() => googleLogin()}
          />
        </View>
        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.navButtonText}>
            Don't have an acount? Create here
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ActivityIndicator>
  );
};

export default LoginScreen;
