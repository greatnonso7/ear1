/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import EvilIcon from 'react-native-vector-icons/Feather';
import StyleGuide from '../../theme';

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.searchContainer}>
        <EvilIcon
          name="search"
          style={{ alignSelf: 'center' }}
          color={StyleGuide.colors.white}
          size={25}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: StyleGuide.spacing * 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: 45,
    height: 50,
    marginLeft: 20,
  },
  searchContainer: {
    backgroundColor: '#0D131B',
    height: 50,
    justifyContent: 'center',
    width: 50,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
  },
  title: {
    color: StyleGuide.colors.white,
    fontSize: 32,
  },
});

export default Header;
