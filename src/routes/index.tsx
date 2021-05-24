/* eslint-disable camelcase */
import React from 'react';
import {
  useFonts,
  Roboto_900Black,
  Roboto_500Medium,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';

import { useAuth } from '../contexts/AuthContext';
import { Loading } from '../screens/Loading';

import { PrivateRoutes } from './private.routes';
import { PublicRoutes } from './public.routes';

export function Routes() {
  const { isAuthenticated, isLoading } = useAuth();

  const [fontsLoaded] = useFonts({
    Roboto_900Black,
    Roboto_500Medium,
    Roboto_400Regular,
  });

  if (isLoading || !fontsLoaded) {
    return <Loading />;
  }

  return isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
}
