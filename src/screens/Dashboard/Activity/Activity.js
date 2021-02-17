/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Header from 'components/Header/Header';
import StyleGuide from 'theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { height, width } = Dimensions.get('window');

const Activity = () => {
  return (
    <View style={{ flex: 1, backgroundColor: StyleGuide.colors.darkColor }}>
      <Header title="Activity" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          left: width / 3,
          top: width * 0.5,
        }}>
        <View style={styles.iconContainer}>
          <Ionicons
            style={styles.icon}
            name="ios-notifications-outline"
            color={StyleGuide.colors.white}
            size={60}
          />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('images/personImage1.png')}
          style={styles.personImage}
        />
        <Image
          source={require('images/personImage2.png')}
          style={styles.personImage}
        />
      </View>
      <View style={{ marginTop: StyleGuide.spacing * 20 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              color: StyleGuide.colors.white,
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            Nothing to see here
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: StyleGuide.spacing * 2,
          }}>
          <Text style={styles.roomDescription}>You didn't make any</Text>
          <Text style={styles.roomDescription}>
            conversation yet, please select
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.roomButton}>
        <Text style={styles.roomText}>Go to Explore Page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: StyleGuide.spacing * 10,
  },
  personImage: {
    width: 100,
    height: 100,
  },
  iconContainer: {
    height: 114,
    width: 114,
    borderRadius: 100,
    backgroundColor: StyleGuide.colors.green,
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    transform: [{ rotate: '10deg' }],
  },
  roomDescription: {
    color: StyleGuide.colors.white,
    opacity: 0.5,
    fontSize: 15,
  },
  roomButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: StyleGuide.colors.green,
    marginHorizontal: 25,
    height: 60,
    marginTop: height * 0.1,
    borderRadius: 32,
  },
  roomText: {
    fontSize: 19,
    fontWeight: 'bold',
  },
});

export default Activity;
