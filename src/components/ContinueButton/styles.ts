// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const ContinueButton = styled(RectButton)<RectButtonProperties>`
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 100%;
  background-color: ${(props) =>
    props.enabled || 'undefined' ? '#52C791' : '#a3a3a3'};
  border-radius: 22px;
`;

export const ContinueButtonText = styled.Text`
  font-size: 28px;
  color: #fff;
  font-family: 'Roboto_500Medium';
`;
