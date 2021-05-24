import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;

  padding: 40px 0;
`;

export const LogoImg = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 250px;
  height: 250px;
`;

export const LogoutButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  height: 42px;
  width: 290px;
  margin-top: 14px;
  background: transparent;
`;

export const LogoutText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'Roboto_500Medium';
`;
