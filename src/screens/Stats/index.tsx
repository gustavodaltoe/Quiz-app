import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';

import { GradientBackground } from '../../components/GradientBackground';
import { MainButtons } from '../../components/MainButtons';
import { ResultCard } from '../../components/ResultCard';
import { Spacer } from '../../components/Spacer';
import { useAuth } from '../../contexts/AuthContext';
import { Loading } from '../Loading';

import { AccuracyBar } from './AccuracyBar';
import { Header } from './Header';
import * as S from './styles';

type Challenge = {
  totalQuestions: number;
  amountCorrect: number;
  amountIncorrect: number;
  totalTime: number;
  avgTimePerQuestion: number;
  streak: number;
};

export function Stats() {
  const [accuracy, setAccuracy] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [avgTimePerQuestion, setAvgTimePerQuestion] = useState(0);
  const [streak, setStreak] = useState(0);

  const [loading, setLoading] = useState(true);

  const { user } = useAuth();

  function sumProperty(objArray: Challenge[], attribute: any): number {
    return objArray.reduce<number>((total, challenge) => {
      const value: number = (challenge as any)[attribute];
      if (!value) return total;

      return total + value;
    }, 0);
  }

  useEffect(() => {
    (async () => {
      const challengesResp = await firebase
        .database()
        .ref(`/users/${user?.uid}/challenges`)
        .get();

      const challenges: Challenge[] = [];

      challengesResp.forEach((challenge) => {
        challenges.push(challenge.toJSON() as Challenge);
      });

      if (!challenges.length) {
        return setLoading(false);
      }

      const totalQuestions = sumProperty(challenges, 'totalQuestions');
      const totalTime = sumProperty(challenges, 'totalTime');
      const correct = sumProperty(challenges, 'amountCorrect');
      const incorrect = sumProperty(challenges, 'amountIncorrect');
      const streak = challenges
        .map((challenge) => challenge.streak)
        .sort((a, b) => a - b)
        .pop();

      setCorrect(correct);
      setIncorrect(incorrect);
      setAvgTimePerQuestion(totalTime / totalQuestions);
      setStreak(streak || 0);
      setAccuracy((correct * 100) / totalQuestions);

      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  return (
    <GradientBackground>
      <>
        <Header />

        <S.Wrapper>
          <AccuracyBar accuracy={accuracy} />

          <Spacer height={60} />

          <S.PerformanceText>Performance Stats</S.PerformanceText>

          <S.CardRow>
            <ResultCard title="Correct" value={String(correct)} />
            <ResultCard title="Incorrect" value={String(incorrect)} />
          </S.CardRow>
          <Spacer height={20} />
          <S.CardRow>
            <ResultCard
              title="Avg. Time/Ques"
              value={`${avgTimePerQuestion.toFixed(1)}s`}
            />
            <ResultCard title="Longest Streak" value={String(streak)} />
          </S.CardRow>

          <Spacer flex={1} />

          <MainButtons showStats={false} />
        </S.Wrapper>
      </>
    </GradientBackground>
  );
}
