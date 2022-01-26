import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  ToastAndroid,
  TextInput,
} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';

import Button from '../components/Button/Button';

import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {user, setUser, googleLogin, login} = useContext(AuthContext);

  const showToast = (message = '') => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  useEffect(() => {
    const revokeUser = async () => {
      await GoogleSignin.revokeAccess();
    };

    if (user?.email !== 'antonio.pertuz01@gmail.com' && user !== null) {
      setUser(null);
      revokeUser();

      showToast('Usuario inválido');
    }
  }, [user, setUser]);

  return (
    <ScrollView>
      <View style={styles.logWp}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          value={email}
          onChangeText={userEmail => setEmail(userEmail)}
          style={styles.input}
          numberOfLines={1}
          placeholder={'Email'}
          placeholderTextColor="#666"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          value={password}
          onChangeText={userPassword => setPassword(userPassword)}
          style={styles.input}
          numberOfLines={1}
          placeholder={'Password'}
          iconType="lock"
          secureTextEntry={true}
        />
      </View>

      <Button label="Ingresar" onPress={() => login(email, password)} />

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

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logWp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    height: 300,
    width: 300,
    resizeMode: 'contain',
  },
  btnWp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
