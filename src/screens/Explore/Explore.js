/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import StyleGuide from '../../theme';
import Header from '../../components/Header/Header';

const { height } = Dimensions.get('window');

const Explore = () => {
  return (
    <View style={{ flex: 1, backgroundColor: StyleGuide.colors.darkColor }}>
      <Header title="Explore" />
      <View style={styles.tabContainer}>
        <View>
          <Text style={styles.activeTab}>PEOPLE</Text>
          <View style={styles.active} />
        </View>
        <Text style={styles.inactiveTab}>ROOMS</Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/images/profile1.png')}
            style={styles.profile}
          />
          <Image
            source={require('../../assets/images/profileLogo.png')}
            style={styles.profileLogo}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginTop: StyleGuide.spacing * 3,
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
});

export default Explore;
