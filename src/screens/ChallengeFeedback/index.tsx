import React, { useCallback, useEffect } from 'react';
import ConfettiCannon from 'react-native-confetti-cannon';
import { useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { GradientBackground } from '../../components/GradientBackground';
import { ContinueButton } from '../../components/ContinueButton';
import { Spacer } from '../../components/Spacer';

import * as S from './styles';

export function ChallengeFeedback() {
  const navigation = useNavigation();
  const windowHeight = useWindowDimensions().height;

  const confettiColors = [
    '#C96B6B',
    '#FDBFE1',
    '#FCFE38',
    '#0077DB',
    '#FF0D01',
    '#FFF9DF',
    '#CCEAF2',
    '#38DAE0',
  ];

  const goToNextScreen = useCallback(() => {
    navigation.navigate('challenge-results');
  }, [navigation]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      goToNextScreen();
    }, 4000);

    return () => clearTimeout(timeout);
  }, [navigation, goToNextScreen]);

  return (
    <GradientBackground>
      <>
        <ConfettiCannon
          count={200}
          origin={{ x: 0, y: windowHeight }}
          colors={confettiColors}
        />

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
