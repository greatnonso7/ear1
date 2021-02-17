/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import StyleGuide from 'theme';
import DeviceInfo from 'react-native-device-info';

const Ranting = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <View style={styles.setTextView}>
        <Text style={styles.setText}>You're all set</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image
          source={require('images/rant1.png')}
          style={styles.rant1}
          resizeMode="contain"
        />
        <Image
          source={require('images/rant2.png')}
          style={styles.rant2}
          resizeMode="contain"
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('images/rant3.png')}
          style={styles.rant3}
          resizeMode="contain"
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image
          source={require('images/rant4.png')}
          style={styles.rant4}
          resizeMode="contain"
        />
        <Image
          source={require('images/rant5.png')}
          style={styles.rant5}
          resizeMode="contain"
        />
      </View>
      <View style={{ marginHorizontal: 20, marginVertical: 50 }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigate('Username')}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00BF69',
            height: 60,
            borderRadius: 32,
          }}>
          <Image source={require('images/fill.png')} style={styles.fill} />
          <Text style={styles.rantText}>Start ranting</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontSize: 12,
            marginTop: 20,
            textAlign: 'center',
          }}>
          Start ranting with friends, create groups and have fun..
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.colors.darkColor,
  },
  setTextView: {
    alignItems: 'center',
    marginTop: DeviceInfo.hasNotch() ? 55 : 10,
  },
  setText: {
    fontSize: 24,
    fontFamily: 'CoolveticaRg-Regular 400',
    color: StyleGuide.colors.white,
  },
  rant1: {
    width: 150,
    height: 150,
    position: 'relative',
    right: 30,
  },
  rant2: {
    width: 150,
    height: 150,
    marginTop: StyleGuide.spacing * 5,
    position: 'relative',
    left: 20,
  },
  rant3: {
    width: 180,
    height: 180,
  },
  rant4: {
    width: 150,
    height: 150,
    position: 'relative',
    right: 38,
  },
  rant5: {
    width: 150,
    height: 150,
    position: 'relative',
    left: 35,
  },
  fill: {
    height: 25,
    width: 60,
    marginRight: 10,
  },
  rantText: {
    fontSize: 19,
    fontFamily: 'CoolveticaRg-Regular 400',
  },
});

export default Ranting;
