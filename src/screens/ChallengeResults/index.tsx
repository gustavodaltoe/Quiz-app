import { FontAwesome } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';

import { Confetti } from '../../components/Confetti';
import { GradientBackground } from '../../components/GradientBackground';
import { MainButtons } from '../../components/MainButtons';
import { ResultCard } from '../../components/ResultCard';
import { Spacer } from '../../components/Spacer';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import * as S from './styles';

export function ChallengeResults() {
  const navigation = useNavigation();

  const {
    amountCorrect,
    amountIncorrect,
    avgTimePerQuestion,
    totalTime,
  } = useContext(ChallengesContext);

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
          <S.CloseButton onPress={() => navigation.navigate('home')}>
            <FontAwesome name="times" size={24} color="#fff" />
          </S.CloseButton>

          <S.Title>
            <FontAwesome name="smile-o" size={64} />
            {'\n'}
            You win!
          </S.Title>

          <Spacer height={40} />

          <S.ResultsTitle>Results</S.ResultsTitle>

          <S.CardRow>
            <ResultCard title="Correct" value={String(amountCorrect)} />
            <ResultCard title="Incorrect" value={String(amountIncorrect)} />
          </S.CardRow>
          <Spacer height={20} />
          <S.CardRow>
            <ResultCard
              title="Avg. Time/Ques"
              value={`${avgTimePerQuestion}s`}
            />
            <ResultCard title="Total time" value={`${totalTime}s`} />
          </S.CardRow>

          <Spacer flex={1} />

          <MainButtons />
        </S.Wrapper>
      </>
    </GradientBackground>
  );
}
