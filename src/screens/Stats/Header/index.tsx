import { FontAwesome } from '@expo/vector-icons';

import React from 'react';

import { BackButton, Wrapper, Title } from './styles';

export function Header() {
  return (
    <Wrapper>
      <BackButton>
        <FontAwesome name="arrow-left" size={24} color="#fff" />
      </BackButton>
      <Title>Stats</Title>
    </Wrapper>
  );
}
