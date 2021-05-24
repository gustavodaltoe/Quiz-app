import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import { ChallengesProvider } from './contexts/ChallengesContext';
import { Routes } from './routes';
import { CountdownProvider } from './contexts/CountdownContext';
import { AuthProvider } from './contexts/AuthContext';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCADb10ABuFvCipDFvpbwNG84AZQx_NXp4',
  authDomain: 'quiz-54fae.firebaseapp.com',
  databaseURL: 'https://quiz-54fae-default-rtdb.firebaseio.com/',
  projectId: 'quiz-54fae',
  storageBucket: 'quiz-54fae.appspot.com',
  messagingSenderId: '126582796038',
  appId: '1:126582796038:web:1b66e9cc55af945ee13887',
  measurementId: 'G-SCL2NKZYRZ',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      <AuthProvider>
        <CountdownProvider>
          <ChallengesProvider>
            <Routes />
          </ChallengesProvider>
        </CountdownProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
