import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface PropsHeight {
  windowHeight: number;
}

export const Container = styled.SafeAreaView `
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View<PropsHeight>`
  width: 100%;
  height: ${({ windowHeight }) => windowHeight * 0.8}px;
  justify-content: center;
`;




 