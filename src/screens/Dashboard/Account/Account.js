/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import StyleGuide from 'theme';

const { height } = Dimensions.get('window');

const Account = () => {
  return (
    <View style={{ flex: 1, backgroundColor: StyleGuide.colors.darkColor }}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Account</Text>
      </View>
      <View style={styles.tabContainer}>
        <View>
          <Text style={styles.activeTab}>PROFILE</Text>
          <View style={styles.active} />
        </View>
        <Text style={styles.inactiveTab}>SETTINGS</Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={require('images/profile1.png')}
            style={styles.profile}
          />
          <Image
            source={require('images/profileLogo.png')}
            style={styles.profileLogo}
          />
        </View>
        <View style={{ position: 'absolute', right: 20, top: 20 }}>
          <Image
            source={require('../../../assets/images/Shape.png')}
            style={{ width: 30, height: 30 }}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: StyleGuide.spacing,
          }}>
          <Text style={styles.displayName}>Muheez Akanni</Text>
          <Text style={styles.username}>@creathor</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: StyleGuide.spacing * 2,
          }}>
          <View>
            <Text style={styles.textCount}>12</Text>
            <Text style={styles.textTopic}>Rooms</Text>
          </View>
          <View>
            <Text style={styles.textCount}>2,215</Text>
            <Text style={styles.textTopic}>Followers</Text>
          </View>
          <View>
            <Text style={styles.textCount}>15</Text>
            <Text style={styles.textTopic}>Following</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              marginTop: StyleGuide.spacing * 2,
              color: StyleGuide.colors.white,
              fontSize: 16,
              fontWeight: 'bold',
              opacity: 0.5,
            }}>
            Photos
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: StyleGuide.spacing * 2,
            }}>
            <Image
              source={require('images/square1.png')}
              style={styles.profileImage}
            />
            <Image
              source={require('images/square2.png')}
              style={styles.profileImage}
            />
            <Image
              source={require('images/square3.png')}
              style={styles.profileImage}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: StyleGuide.spacing * 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: StyleGuide.colors.white,
    fontSize: 32,
    fontFamily: 'CoolveticaRg-Regular 400',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: StyleGuide.spacing * 3,
  },
  activeTab: {
    fontSize: 19,
    color: StyleGuide.colors.white,
    fontWeight: 'bold',
  },
  active: {
    height: 10,
    width: 30,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: StyleGuide.colors.green,
  },
  inactiveTab: {
    fontSize: 19,
    color: StyleGuide.colors.white,
    fontWeight: 'bold',
    opacity: 0.5,
  },
  cardContainer: {
    marginHorizontal: 25,
    marginTop: StyleGuide.spacing * 3,
    height: Platform.OS === 'android' ? height * 0.61 : height * 0.5,
    borderRadius: 32,
    backgroundColor: '#0D131B',
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StyleGuide.spacing * 2,
  },
  profile: {
    width: 100,
    height: 100,
  },
  profileLogo: {
    width: 40,
    height: 40,
    position: 'absolute',
    right: 120,
    top: 60,
  },
  displayName: {
    color: StyleGuide.colors.white,
    fontFamily: 'CoolveticaRg-Regular 400',
    fontSize: 24,
  },
  username: {
    color: StyleGuide.colors.white,
    opacity: 0.5,
    fontSize: 16,
  },
  textCount: {
    color: StyleGuide.colors.white,
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'CoolveticaRg-Regular 400',
  },
  textTopic: {
    color: StyleGuide.colors.white,
    opacity: 0.5,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'CoolveticaRg-Regular 400',
  },
  profileImage: {
    width: 80,
    height: 80,
  },
});

export default Account;
