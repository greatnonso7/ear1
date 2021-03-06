import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Ranting, Username } from '../../screens/Auth';

const AuthStack = createStackNavigator();

const Onboarding = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login" headerMode="none">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Ranting" component={Ranting} />
      <AuthStack.Screen name="Username" component={Username} />
    </AuthStack.Navigator>
  );
};

export default Onboarding;
