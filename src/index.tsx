/* eslint-disable camelcase */
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Roboto_900Black,
  Roboto_500Medium,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';

import { ChallengesProvider } from './contexts/ChallengesContext';
import { Routes } from './routes';

export function App() {
  const [fontsLoaded] = useFonts({
    Roboto_900Black,
    Roboto_500Medium,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  } else {
    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#000000" />

        <ChallengesProvider>
          <Routes />
        </ChallengesProvider>
      </NavigationContainer>
    );
  }
}
