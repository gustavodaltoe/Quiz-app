import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import { ContinueButton } from '../../components/ContinueButton';
import { GradientBackground } from '../../components/GradientBackground';
import { Spacer } from '../../components/Spacer';

import { Header } from './Header';
import * as S from './styles';

export function Challenge() {
  const navigation = useNavigation();

  const [goBack, setGoBack] = useState(false);

  const [question, setQuestion] = useState(
    'In Counter-Strike: Global Offensive, what’s the rarity of discontinued skins called?',
  );
  const [answers, setAnswers] = useState([
    'Contraband',
    'Discontinued',
    'Diminshed',
    'Limited',
  ]);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const answerColors = ['#2D9DA6', '#EFA929', '#D5546D', '#5488D5'];

  const handleContinuePress = () => {
    navigation.navigate('challenge-feedback');
  };

  const handleAnswersPress = (answer: string) => {
    setSelectedAnswer(answer);
  };

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
            enabled={!!selectedAnswer}
            onPress={handleContinuePress}
          />
        </S.Wrapper>
      </>
    </GradientBackground>
  );
}
