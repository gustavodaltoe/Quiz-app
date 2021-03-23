import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';

const AppStack = createStackNavigator();

export function Routes() {
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="home" component={Home} />
    </AppStack.Navigator>
  );
}
