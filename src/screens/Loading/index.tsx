import React from 'react';
import { ActivityIndicator } from 'react-native';

import logo from '../../assets/logo.png';
import { GradientBackground } from '../../components/GradientBackground';
import { Spacer } from '../../components/Spacer';
import { LogoImg } from '../Home/styles';

import { Wrapper } from './styles';

export const Loading = () => {
  return (
    <GradientBackground>
      <Wrapper>
        <LogoImg source={logo} />

        <Spacer flex={1} />

        <ActivityIndicator size={100} color="#fff" />
      </Wrapper>
    </GradientBackground>
  );
};
