import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${RFPercentage(18)}px;
  /* background-color: ${({ theme }) => theme.colors.secondary}; */
  /* margin-bottom: ${RFValue(16)}px; */
  padding: 26px 16px;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
  margin-left: ${RFValue(16)}px;
`;

export const Picture = styled.Image`
  height: ${RFValue(80)}px;
  width: ${RFValue(80)}px;
  border-radius: 50px;
`;

export const Content = styled.View``;

export const LastName = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
  margin-left: ${RFValue(16)}px;
`; 

