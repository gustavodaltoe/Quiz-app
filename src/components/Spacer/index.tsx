import React from 'react';
import { View } from 'react-native';

interface Props {
  width?: string | number;
  height?: string | number;
  flex?: number;
}

export function Spacer({ width, height, flex }: Props) {
  return <View style={{ width, height, flex }} />;
}
