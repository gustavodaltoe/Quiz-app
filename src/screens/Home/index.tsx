import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';

import logo from '../../assets/logo.png';
import { MainButtons } from '../../components/MainButtons';
import { GradientBackground } from '../../components/GradientBackground';
import { Spacer } from '../../components/Spacer';

import { Wrapper, LogoImg } from './styles';

export function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      // Prevent default behavior of going back
      if (e.data.action.type === 'GO_BACK') {
        e.preventDefault();

        BackHandler.exitApp();
      }
    });
  }, [navigation]);

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
