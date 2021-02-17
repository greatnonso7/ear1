/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import StyleGuide from 'theme';

const Username = ({ navigation: { navigate } }) => {
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.usernameContainer}>
        <Text style={styles.username}>Create username</Text>
        <Text style={styles.usernameDescription}>
          Please create your username to continue
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 0.4,
        }}>
        <Text style={{ color: 'white', fontSize: 30 }}>@</Text>
        <TextInput
          placeholder="username"
          placeholderTextColor="#e5e5e5"
          value={username}
          onChangeText={(username) => setUsername(username)}
          style={{
            fontSize: 30,
            marginLeft: StyleGuide.spacing,
            fontWeight: 'bold',
            width: 150,
            color: StyleGuide.colors.white,
            opacity: 0.5,
          }}
        />
      </View>
      <View flex={0.35} />
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={username.length === 0 ? true : false}
        onPress={() => navigate('Dashboard', { screen: 'Explore' })}
        style={{
          flex: 0.08,
          backgroundColor:
            username.length === 0 ? '#134921' : StyleGuide.colors.green,
          borderRadius: 32,
          marginHorizontal: 20,
          fontFamily: 'CoolveticaRg-Regular 400',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: StyleGuide.colors.black,
            fontSize: 20,
            fontFamily: 'CoolveticaRg-Regular 400',
          }}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.colors.darkColor,
  },
  usernameContainer: {
    flex: 0.1,
    marginTop: StyleGuide.spacing * 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    color: StyleGuide.colors.white,
    fontFamily: 'CoolveticaRg-Regular 400',
    fontSize: 24,
  },
  usernameDescription: {
    color: StyleGuide.colors.white,
    opacity: 0.5,
    padding: 10,
    fontSize: 13,
  },
});

export default Username;
