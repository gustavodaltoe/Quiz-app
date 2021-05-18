import { FontAwesome } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View } from 'react-native';

import { ChallengesContext } from '../../../contexts/ChallengesContext';
import { CountdownContext } from '../../../contexts/CountdownContext';

import * as S from './styles';

export function Header() {
  const navigation = useNavigation();

  const { current, total } = useContext(ChallengesContext);
  const { timeInMilliseconds, totalTime, timeInSeconds } = useContext(
    CountdownContext,
  );

  const onClosePress = () => {
    navigation.navigate('home');
  };

  return (
    <>
      <S.Wrapper>
        <S.HeaderText>{`${current + 1}/${total}`}</S.HeaderText>
        <S.HeaderText>{timeInSeconds}s</S.HeaderText>
        <S.CloseButton onPress={onClosePress}>
          <FontAwesome name="times" size={24} color="#fff" />
        </S.CloseButton>
      </S.Wrapper>
      <S.TimerBar>
        <View
          style={{
            backgroundColor: '#52C791',
            height: '100%',
            width: `${(timeInMilliseconds * 100) / totalTime}%`,
          }}
        />
      </S.TimerBar>
    </>
  );
}
