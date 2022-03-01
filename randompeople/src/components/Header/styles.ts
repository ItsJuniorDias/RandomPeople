import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface PropsPosition {
  positionText?: boolean;
}

export const Container = styled.View<PropsPosition>`
  width: 100%;
  height: ${RFPercentage(18)}px;
  elevation: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0 16px;
  justify-content: ${({ positionText }) => positionText ? 'flex-start' : 'center'};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.title_secondary};
`;

export const IconContent = styled.TouchableOpacity`
  margin-top: ${RFValue(16)}px;
`;

export const ContentTitle = styled.View`
  width: 100%;
  align-items: center;
`;
