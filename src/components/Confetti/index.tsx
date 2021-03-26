import React from 'react';
import { useWindowDimensions } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

const confettiColors = [
  '#C96B6B',
  '#FDBFE1',
  '#FCFE38',
  '#0077DB',
  '#FF0D01',
  '#FFF9DF',
  '#CCEAF2',
  '#38DAE0',
];

export const Confetti = () => {
  const windowHeight = useWindowDimensions().height;

  return (
    <ConfettiCannon
      count={150}
      origin={{ x: 0, y: windowHeight }}
      colors={confettiColors}
    />
  );
};
