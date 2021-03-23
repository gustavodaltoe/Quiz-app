import React from 'react';

import { GradientBackground } from '../../components/GradientBackground';
import { MainButtons } from '../../components/MainButtons';
import { Spacer } from '../../components/Spacer';

import { AccuracyBar } from './AccuracyBar';
import { Header } from './Header';
import {
  Card,
  CardRow,
  CardTitle,
  CardValue,
  PerformanceText,
  Wrapper,
} from './styles';

export function Stats() {
  return (
    <GradientBackground>
      <>
        <Header />

        <Wrapper>
          <AccuracyBar />

          <Spacer height={60} />

          <PerformanceText>Performance Stats</PerformanceText>

          <CardRow>
            <Card>
              <CardValue>8</CardValue>
              <CardTitle>Correct</CardTitle>
            </Card>
            <Card>
              <CardValue>3</CardValue>
              <CardTitle>Incorrect</CardTitle>
            </Card>
          </CardRow>
          <Spacer height={20} />
          <CardRow>
            <Card>
              <CardValue>7.3s</CardValue>
              <CardTitle>Avg. Time/Ques</CardTitle>
            </Card>
            <Card>
              <CardValue>6</CardValue>
              <CardTitle>Longest Streak</CardTitle>
            </Card>
          </CardRow>

          <Spacer flex={1} />

          <MainButtons showStats={false} />
        </Wrapper>
      </>
    </GradientBackground>
  );
}
