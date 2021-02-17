import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './onboarding';
import Dashboard from './account';
// import Dashboard from './account/explore';

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};
