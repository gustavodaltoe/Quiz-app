import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  height: 60px;
  flex-direction: row;
  padding: 0 24px;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: 18px;
  font-family: 'Roboto_500Medium';
  color: #fff;
`;

export const CloseButton = styled(BorderlessButton)``;

export const TimerBar = styled.View`
  width: 100%;
  height: 8px;
  background: #5de2a5;
`;
