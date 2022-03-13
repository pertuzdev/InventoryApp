import React, {useContext} from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';

import {useForm} from 'react-hook-form';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

import {colors} from '../../styles/globalStyles';
import {styles} from './SignupScreen.styles';

import {alertOnFirebaseAuth} from '../../helpers/alerts/alertOnFirebaseAuth/alertOnFirebaseAuth';

import Button from '../../components/Button/Button';
import SignupForm from '../../components/Form/SignupForm';
import ActivityIndicator from '../../components/ActivityIndicator/ActivityIndicator';
import {useUser, useUserAuth} from '../../services/auth/useUser';

const SignupScreen = ({navigation}) => {
  const {
    handleSubmit,
    control,
    watch,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const {register} = useUserAuth();

  const {loading, error, resetError} = useUser();

  const handleSave = ({email, password}) => register(email, password);

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
        <SignupForm control={control} errors={errors} watch={watch} />

        <View style={styles.btnWrapper}>
          <Button
            label="Crear cuenta"
            size="lg"
            onPress={handleSubmit(handleSave)}
          />
        </View>

        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            By registering, you confirm that you accept our{' '}
          </Text>
          <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
            <Text
              style={[styles.color_textPrivate, {color: colors.primaryBlue}]}>
              Terms of service
            </Text>
          </TouchableOpacity>
          <Text style={styles.color_textPrivate}> and </Text>
          <Text style={[styles.color_textPrivate, {color: colors.primaryBlue}]}>
            Privacy Policy
          </Text>
        </View>

        <View style={styles.btnWp}>
          <GoogleSigninButton
            style={{width: 250, height: 53}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={() => null}
          />
        </View>
        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navButtonText}>Have an account? Sign In</Text>
        </TouchableOpacity>
      </ScrollView>
    </ActivityIndicator>
  );
};

export default SignupScreen;
