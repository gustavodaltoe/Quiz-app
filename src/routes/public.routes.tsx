import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';

const PublicStack = createStackNavigator();

export const PublicRoutes = () => {
  return (
    <PublicStack.Navigator headerMode="none">
      <PublicStack.Screen name="sign-in" component={SignIn} />
      <PublicStack.Screen name="sign-up" component={SignUp} />
    </PublicStack.Navigator>
  );
};
