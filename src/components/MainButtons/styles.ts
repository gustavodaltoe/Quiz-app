import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Button = styled(RectButton)`
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 290px;
  background-color: #fff;
  border-radius: 22px;
`;

export const ButtonText = styled.Text`
  font-size: 28px;
  color: #2a2a72;
  font-family: 'Roboto_900Black';
`;
