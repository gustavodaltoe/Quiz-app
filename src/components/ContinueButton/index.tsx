import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RectButtonProperties } from 'react-native-gesture-handler';

import * as S from './styles';

export function ContinueButton(props: RectButtonProperties) {
  return (
    <S.ContinueButton {...props}>
      <S.ContinueButtonText>Continue</S.ContinueButtonText>
    </S.ContinueButton>
  );
}
