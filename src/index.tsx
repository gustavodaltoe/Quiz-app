import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// eslint-disable-next-line camelcase
import { useFonts, Roboto_900Black } from '@expo-google-fonts/roboto';

import { Routes } from './routes';

export function App() {
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line camelcase
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  } else {
    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#000000" />
        <Routes />
      </NavigationContainer>
    );
  }
}
