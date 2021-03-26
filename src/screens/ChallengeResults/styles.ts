import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  padding: 40px 36px;
`;

export const CloseButton = styled(BorderlessButton)`
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const Title = styled.Text`
  font-family: 'Roboto_900Black';
  font-size: 36px;
  text-align: center;
  color: #fff;
`;

export const ResultsTitle = styled.Text`
  font-family: 'Roboto_500Medium';
  font-size: 22px;
  text-align: center;
  color: #fff;

  margin-bottom: 20px;
`;

export const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 260px;
`;
