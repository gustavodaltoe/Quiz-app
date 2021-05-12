import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Text } from 'react-native';

import { ContinueButton } from '../../components/ContinueButton';
import { GradientBackground } from '../../components/GradientBackground';
import { Spacer } from '../../components/Spacer';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import { Header } from './Header';
import * as S from './styles';

const answerColors = ['#2D9DA6', '#EFA929', '#D5546D', '#5488D5'];

export function Challenge() {
  const navigation = useNavigation();

  const { isLoading, questions, current, answerQuestion } = useContext(
    ChallengesContext,
  );
  const { startCountdown, resetCountdown } = useContext(CountdownContext);

  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleContinuePress = () => {
    resetCountdown();
    const isCorrect = answerQuestion(selectedAnswer);

    navigation.navigate('challenge-feedback', { isCorrect });
  };

  const handleAnswersPress = (answer: string) => {
    setSelectedAnswer(answer);
  };

  useFocusEffect(
    useCallback(() => {
      if (!isLoading) {
        startCountdown();
      }
    }, [isLoading, startCountdown]),
  );

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      // Prevent default behavior of going back
      if (e.data.action.type === 'GO_BACK') {
        e.preventDefault();

        navigation.navigate('home');
      }
    });
  }, [navigation]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  const { question, answers } = questions[current];

  return (
    <GradientBackground>
      <>
        <Header />
        <S.Wrapper>
          <S.Question>{question}</S.Question>

          <Spacer flex={1} />
          {answers.map((answer, i) => (
            <S.Answer
              key={answer}
              selected={answer === selectedAnswer}
              onPress={() => handleAnswersPress(answer)}
              style={{ backgroundColor: answerColors[i] }}>
              <S.AnswerText>{answer}</S.AnswerText>
            </S.Answer>
          ))}
          <Spacer height={40} />

          <ContinueButton
            enabled={selectedAnswer.length > 0}
            onPress={handleContinuePress}
          />
        </S.Wrapper>
      </>
    </GradientBackground>
  );
}
