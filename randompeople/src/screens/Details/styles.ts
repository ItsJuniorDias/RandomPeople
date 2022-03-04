import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  margin-bottom: 32px;
  margin-top: ${RFValue(32)}px;
`;

export const Content = styled.SafeAreaView`
  flex: 1;
`;

export const Profile = styled.Image`
  width: ${RFValue(140)}px;
  height: ${RFValue(140)}px;

  border-radius: 50px;
`;

export const Scroll = styled.ScrollView`
  padding: 0 16px;
`;

