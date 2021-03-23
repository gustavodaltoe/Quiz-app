import React from 'react';
import { View } from 'react-native';

import { Bar, PercentageText, Wrapper } from './styles';

export function AccuracyBar() {
  return (
    <Wrapper>
      <PercentageText>Accuracy: 89%</PercentageText>
      <Bar>
        <View
          style={{ height: '100%', width: '89%', backgroundColor: '#52C791' }}
        />
      </Bar>
    </Wrapper>
  );
}
