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
