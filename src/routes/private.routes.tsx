import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Stats } from '../screens/Stats';
import { ChallengeFeedback } from '../screens/ChallengeFeedback';
import { Challenge } from '../screens/Challenge';
import { ChallengeResults } from '../screens/ChallengeResults';

const PrivateStack = createStackNavigator();

export const PrivateRoutes = () => {
  return (
    <PrivateStack.Navigator headerMode="none">
      <PrivateStack.Screen name="home" component={Home} />
      <PrivateStack.Screen name="stats" component={Stats} />
      <PrivateStack.Screen name="challenge" component={Challenge} />
      <PrivateStack.Screen
        name="challenge-feedback"
        component={ChallengeFeedback}
      />
      <PrivateStack.Screen
        name="challenge-results"
        component={ChallengeResults}
      />
    </PrivateStack.Navigator>
  );
};
