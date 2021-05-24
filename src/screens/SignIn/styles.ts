import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface InputProps {
  hasError?: boolean;
}

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;

  padding: 40px 0;
`;

export const LogoImg = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 200px;
  height: 200px;
`;

export const Form = styled.View`
  justify-content: center;
`;

export const InputTitle = styled.Text`
  font-size: 18px;
  margin: 8px 0 12px;
  color: #fff;
  font-family: 'Roboto_400Regular';
`;

export const Input = styled.TextInput<InputProps>`
  background-color: #fff;
  height: 40px;
  width: 290px;
  padding: 8px;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${(props) => (props.hasError ? 'red' : '#fff')};
`;

export const Button = styled(RectButton)`
  justify-content: center;
  align-items: center;
  height: 42px;
  width: 290px;
  background-color: #fff;
  border-radius: 20px;
`;

export const ButtonText = styled.Text`
  font-size: 22px;
  color: #2a2a72;
  font-family: 'Roboto_900Black';
`;

export const NotRegisteredText = styled.Text`
  font-size: 14px;
  font-family: 'Roboto_400Regular';
  text-align: center;
  color: #fff;
`;

export const TransparentButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'Roboto_500Medium';
  text-decoration: underline;
`;
