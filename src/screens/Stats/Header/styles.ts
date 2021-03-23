import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Wrapper = styled.View`
  height: 60px;
  justify-content: center;
`;

export const BackButton = styled(BorderlessButton)`
  position: absolute;
  top: 16px;
  left: 20px;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 28px;
  font-family: 'Roboto_900Black';
`;
