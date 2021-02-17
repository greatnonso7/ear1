import React from 'react';
import { View, Text } from 'react-native';
import StyleGuide from '../../theme';
import Header from '../../components/Header/Header';

const Explore = () => {
  return (
    <View style={{ flex: 1, backgroundColor: StyleGuide.colors.darkColor }}>
      <Header title="Explore" />
    </View>
  );
};

export default Explore;
