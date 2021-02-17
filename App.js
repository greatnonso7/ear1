/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Explore from './src/screens/Explore/Explore';
import Login from './src/screens/Login/Login';
import Ranting from './src/screens/Ranting/Ranting';
import Rooms from './src/screens/Rooms/Rooms';

const App = () => {
  return (
    <>
      {/* <Login /> */}
      {/* <Ranting /> */}
      {/* <Explore /> */}
      <Rooms />
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
