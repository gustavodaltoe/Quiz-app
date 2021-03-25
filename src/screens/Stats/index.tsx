import React from 'react';

import { GradientBackground } from '../../components/GradientBackground';
import { MainButtons } from '../../components/MainButtons';
import { ResultCard } from '../../components/ResultCard';
import { Spacer } from '../../components/Spacer';

import { AccuracyBar } from './AccuracyBar';
import { Header } from './Header';
import * as S from './styles';

export function Stats() {
  return (
    <GradientBackground>
      <>
        <Header />

        <S.Wrapper>
          <AccuracyBar />

          <Spacer height={60} />

          <S.PerformanceText>Performance Stats</S.PerformanceText>

          <S.CardRow>
            <ResultCard title="Correct" value="8" />
            <ResultCard title="Incorrect" value="3" />
          </S.CardRow>
          <Spacer height={20} />
          <S.CardRow>
            <ResultCard title="Avg. Time/Ques" value="7.3s" />
            <ResultCard title="Longest Streak" value="6" />
          </S.CardRow>

          <Spacer flex={1} />

          <MainButtons showStats={false} />
        </S.Wrapper>
      </>
    </GradientBackground>
  );
}
