import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  padding: 40px 0;
`;

export const PerformanceText = styled.Text`
  text-align: center;
  color: #fff;
  font-family: 'Roboto_500Medium';
  font-size: 22px;

  margin-bottom: 26px;
`;

export const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 260px;
`;

export const Card = styled.View`
  width: 120px;
  height: 90px;
  border-radius: 8px;

  justify-content: center;
  align-items: center;

  background-color: #105aa0;
`;

export const CardValue = styled.Text`
  font-size: 28px;
  color: #fff;
  font-family: 'Roboto_900Black';
`;

export const CardTitle = styled.Text`
  font-size: 12px;
  color: #fff;
  font-family: 'Roboto_500Medium';
`;
