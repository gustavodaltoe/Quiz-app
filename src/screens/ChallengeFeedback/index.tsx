import { FontAwesome } from '@expo/vector-icons';
import React, { useCallback, useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

import { GradientBackground } from '../../components/GradientBackground';
import { ContinueButton } from '../../components/ContinueButton';
import { Spacer } from '../../components/Spacer';
import { Confetti } from '../../components/Confetti';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import * as S from './styles';

type ParamList = {
  'challenge-feedback': {
    isCorrect: boolean;
  };
};

type IProps = StackScreenProps<ParamList, 'challenge-feedback'>;

let timeout: number;

export function ChallengeFeedback({ route }: IProps) {
  const navigation = useNavigation();

  const { hasFinished } = useContext(ChallengesContext);

  const { isCorrect } = route.params;

  const goToNextScreen = useCallback(() => {
    clearTimeout(timeout);
    if (hasFinished) {
      return navigation.navigate('challenge-results');
    }
    navigation.navigate('challenge');
  }, [hasFinished, navigation]);

  useEffect(() => {
    timeout = setTimeout(() => {
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
        {isCorrect && <Confetti />}

        <S.Wrapper>
          <Spacer flex={1} />
          {isCorrect ? (
            <S.FeedbackText>Awesome!{'\n'}Correct answer</S.FeedbackText>
          ) : (
            <>
              <FontAwesome name="frown-o" size={96} color="#fff" />
              <S.FeedbackText>Incorrect answer</S.FeedbackText>
            </>
          )}
          <Spacer flex={1} />

          <ContinueButton onPress={goToNextScreen} />
        </S.Wrapper>
      </>
    </GradientBackground>
  );
}
