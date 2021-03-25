// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TouchableOpacityProps } from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface AnswerProps extends TouchableOpacityProps {
  selected: boolean;
}

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding: 40px 32px;
`;

export const Question = styled.Text`
  color: #fff;
  font-family: 'Roboto_400Regular';
  font-size: 24px;
  text-align: center;
  width: 100%;
`;

export const Answer = styled.TouchableOpacity<AnswerProps>`
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 100%;
  border-radius: 4px;
  margin-top: 16px;

  border: 2px solid ${(props) => (props.selected ? '#fff' : 'transparent')};
`;

export const AnswerText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: 'Roboto_500Medium';
`;
