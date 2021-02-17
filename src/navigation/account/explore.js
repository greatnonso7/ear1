import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Explore } from '../../screens/Dashboard';

const HomeStack = createStackNavigator();

const Dashboard = () => {
  return (
    <HomeStack.Navigator initialRouteName="Explore" headerMode="none">
      <HomeStack.Screen name="Explore" component={Explore} />
    </HomeStack.Navigator>
  );
};

export default Dashboard;
