import React from 'react';

import * as S from './styles';

interface Props {
  value: string;
  title: string;
}

export function ResultCard({ value, title }: Props) {
  return (
    <S.Card>
      <S.CardValue>{value}</S.CardValue>
      <S.CardTitle>{title}</S.CardTitle>
    </S.Card>
  );
}
