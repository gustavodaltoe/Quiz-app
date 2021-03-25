import React, { useEffect } from 'react';
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('challenge-results');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigation]);

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

          <ContinueButton />
        </S.Wrapper>
      </>
    </GradientBackground>
  );
}
