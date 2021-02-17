import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Explore,
  Rooms,
  Account,
  Activity,
  Message,
} from '../../screens/Dashboard';
import StyleGuide from 'theme';
import Animated from 'react-native-reanimated';

const AppTabs = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <AppTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Explore') {
            iconName = 'antenna';
          } else if (route.name === 'Rooms') {
            iconName = 'headset';
          } else if (route.name === 'Account') {
            iconName = 'account-outline';
          } else if (route.name === 'Activity') {
            iconName = 'bell-outline';
          } else if (route.name === 'Message') {
            iconName = 'email-outline';
          }
          return (
            <Animated.View>
              <Icon
                name={iconName}
                size={30}
                color={
                  focused ? StyleGuide.colors.green : StyleGuide.colors.gray
                }
              />
            </Animated.View>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: StyleGuide.colors.green,
        showLabel: false,
        style: styles.root,
      }}>
      <AppTabs.Screen name="Rooms" component={Rooms} />
      <AppTabs.Screen name="Message" component={Message} />
      <AppTabs.Screen name="Explore" component={Explore} />
      <AppTabs.Screen name="Activity" component={Activity} />
      <AppTabs.Screen name="Account" component={Account} />
    </AppTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  root: {
    elevation: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderTopColor: StyleGuide.colors.darkColor,
    backgroundColor: '#0D131B',
  },
});

export default Dashboard;
