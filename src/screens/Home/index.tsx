import React from 'react';

import logo from '../../assets/logo.png';
import { MainButtons } from '../../components/MainButtons';
import { GradientBackground } from '../../components/GradientBackground';
import { Spacer } from '../../components/Spacer';

import { Wrapper, LogoImg } from './styles';

export function Home() {
  return (
    <GradientBackground>
      <Wrapper>
        <LogoImg source={logo} />

        <Spacer flex={1} />

        <MainButtons />
      </Wrapper>
    </GradientBackground>
  );
}
