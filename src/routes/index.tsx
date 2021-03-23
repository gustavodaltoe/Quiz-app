import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Stats } from '../screens/Stats';
import { Challenge } from '../screens/ChallengeFeedback';
import { ChallengeFeedback } from '../screens/Challenge';
import { ChallengeResults } from '../screens/ChallengeResults';

const AppStack = createStackNavigator();

export function Routes() {
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="home" component={Home} />
      <AppStack.Screen name="stats" component={Stats} />
      <AppStack.Screen name="challenge" component={Challenge} />
      <AppStack.Screen
        name="challenge-feedback"
        component={ChallengeFeedback}
      />
      <AppStack.Screen name="challenge-results" component={ChallengeResults} />
    </AppStack.Navigator>
  );
}
