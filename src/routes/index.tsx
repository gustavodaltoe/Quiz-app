import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Stats } from '../screens/Stats';
import { ChallengeFeedback } from '../screens/ChallengeFeedback';
import { Challenge } from '../screens/Challenge';
import { ChallengeResults } from '../screens/ChallengeResults';
import { SignIn } from '../screens/SignIn';

const AppStack = createStackNavigator();

export function Routes() {
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="sign-in" component={SignIn} />
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
