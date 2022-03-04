import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const TextContent = styled.View`
  width: 100%;
  margin-top: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`;

