import React from 'react';
import { View } from 'react-native';

import { Bar, PercentageText, Wrapper } from './styles';

interface Props {
  accuracy: number;
}

export function AccuracyBar({ accuracy }: Props) {
  return (
    <Wrapper>
      <PercentageText>Accuracy: {Math.round(accuracy)}%</PercentageText>
      <Bar>
        <View
          style={{
            height: '100%',
            width: `${accuracy}%`,
            backgroundColor: '#52C791',
          }}
        />
      </Bar>
    </Wrapper>
  );
}
