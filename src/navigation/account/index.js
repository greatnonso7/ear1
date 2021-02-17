import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Explore, Rooms, Account, Activity, Message } from 'screens/Dashboard';
import StyleGuide from '../../theme';

const AppTabs = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <AppTabs.Navigator
      initialRouteName="Explore"
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
            <Icon
              name={iconName}
              size={30}
              color={focused ? StyleGuide.colors.green : StyleGuide.colors.gray}
              style={{
                transform: [{ rotate: focused ? '20deg' : null }],
              }}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: StyleGuide.colors.green,
        showLabel: false,
        style: styles.root,
      }}>
      <AppTabs.Screen name="Explore" component={Explore} />
      <AppTabs.Screen name="Account" component={Account} />
      <AppTabs.Screen name="Message" component={Message} />
      <AppTabs.Screen name="Rooms" component={Rooms} />
      <AppTabs.Screen name="Activity" component={Activity} />
    </AppTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  root: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});

export default Dashboard;
