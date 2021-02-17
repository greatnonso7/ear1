/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StyleGuide from '../../theme';
import Header from '../../components/Header/Header';

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
});

export default Explore;
