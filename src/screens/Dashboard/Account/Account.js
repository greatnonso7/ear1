/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
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
              marginTop: StyleGuide.spacing * 6,
              color: StyleGuide.colors.white,
              fontSize: 16,
              fontWeight: 'bold',
              opacity: 0.5,
            }}>
            Public Rooms
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: StyleGuide.spacing * 2.5,
            }}>
            <Image
              source={require('images/profile1.png')}
              style={[
                styles.profileImage,
                { marginLeft: StyleGuide.spacing * 6 },
              ]}
            />
            <Image
              source={require('images/profile2.png')}
              style={[
                styles.profileImage,
                { position: 'relative', right: StyleGuide.spacing },
              ]}
            />
            <Image
              source={require('images/profile4.png')}
              style={[
                styles.profileImage,
                { position: 'relative', right: StyleGuide.spacing * 2.5 },
              ]}
            />
            <Image
              source={require('images/profile2.png')}
              style={[
                styles.profileImage,
                { position: 'relative', right: StyleGuide.spacing * 4 },
              ]}
            />
            <Image
              source={require('images/profile3.png')}
              style={[
                styles.profileImage,
                { position: 'relative', right: StyleGuide.spacing * 6 },
              ]}
            />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: StyleGuide.spacing * 4,
                backgroundColor: '#0D131B',
                borderWidth: 2,
                width: 100,
                height: 50,
                borderRadius: 32,
                borderColor: '#00BF69',
              }}>
              <Text style={{ color: '#00BF69' }}>Unfollow</Text>
            </TouchableOpacity>
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
    height: height * 0.61,
    borderRadius: 32,
    backgroundColor: '#0D131B',
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StyleGuide.spacing * 5,
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
    fontWeight: 'bold',
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
    fontWeight: 'bold',
  },
  textTopic: {
    color: StyleGuide.colors.white,
    opacity: 0.5,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  profileImage: {
    width: 50,
    height: 50,
  },
});

export default Account;
