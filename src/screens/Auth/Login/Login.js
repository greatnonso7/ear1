/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import StyleGuide from 'theme';

const Login = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image source={require('images/logo.png')} style={styles.logo} />
      <View style={styles.imageContainer}>
        <Image source={require('images/login1.png')} style={styles.imageLeft} />
        <Image
          source={require('images/login2.png')}
          style={styles.imageRight}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.ear1Text, { color: '#808387' }]}>Meet</Text>
          <Text style={[styles.ear1Text, { color: 'white' }]}>{''} ear1</Text>
          <Text style={[styles.ear1Text, { color: '#808387' }]}>,</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => navigate('Ranting')}
            style={[styles.loginButton, { backgroundColor: '#171817' }]}>
            <Text style={[styles.loginButtonText, { color: 'white' }]}>
              Login / Sign Up With Apple
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('Ranting')}
            style={[styles.loginButton, { backgroundColor: '#00BF69' }]}>
            <Text style={styles.loginButtonText}>Sign Up With Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('Ranting')}
            style={[styles.loginButton, { backgroundColor: '#11ADFF' }]}>
            <Text style={[styles.loginButtonText, { color: 'white' }]}>
              Sign Up With Twitter
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ color: 'white' }}>Have an account? </Text>
          <TouchableOpacity
            onPress={() => navigate('Ranting')}
            style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white', textDecorationLine: 'underline' }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.colors.darkColor,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: 45,
    height: 50,
    marginHorizontal: 20,
    marginVertical: Platform.OS === 'android' ? 20 : 50,
    ...StyleSheet.absoluteFillObject,
  },
  imageLeft: {
    width: 210,
    height: 500,
    position: 'relative',
    bottom: 20,
  },
  imageRight: {
    position: 'relative',
    top: 70,
    width: 130,
    height: 300,
  },
  buttonContainer: {
    marginHorizontal: 20,
  },
  textContainer: {
    flexDirection: 'row',
  },
  ear1Text: {
    fontSize: 32,
    // fontFamily: 'CoolveticaCrammedRg-Regular 400',
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    height: 52,
    borderRadius: 32,
  },
  loginButtonText: {
    fontSize: 19,
  },
});

export default Login;
