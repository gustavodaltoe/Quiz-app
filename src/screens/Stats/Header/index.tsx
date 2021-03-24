import { FontAwesome } from '@expo/vector-icons';

import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { BackButton, Wrapper, Title } from './styles';

export function Header() {
  const navigation = useNavigation();

  return (
    <Wrapper>
      <BackButton onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={24} color="#fff" />
      </BackButton>
      <Title>Stats</Title>
    </Wrapper>
  );
}
