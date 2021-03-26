import React, { useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { GradientBackground } from '../../components/GradientBackground';
import { ContinueButton } from '../../components/ContinueButton';
import { Spacer } from '../../components/Spacer';
import { Confetti } from '../../components/Confetti';

import * as S from './styles';

export function ChallengeFeedback() {
  const navigation = useNavigation();

  const goToNextScreen = useCallback(() => {
    navigation.navigate('challenge-results');
  }, [navigation]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      goToNextScreen();
    }, 4000);

    return () => clearTimeout(timeout);
  }, [navigation, goToNextScreen]);

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      // Prevent default behavior of going back
      if (e.data.action.type === 'GO_BACK') {
        e.preventDefault();

        navigation.navigate('home');
      }
    });
  }, [navigation]);

  return (
    <GradientBackground>
      <>
        <Confetti />

        <S.Wrapper>
          <Spacer flex={1} />
          <S.FeedbackText>Awesome!{'\n'}Correct answer</S.FeedbackText>
          <Spacer flex={1} />

          <ContinueButton onPress={goToNextScreen} />
        </S.Wrapper>
      </>
    </GradientBackground>
  );
}
