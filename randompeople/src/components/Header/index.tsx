import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../global/styles/theme';

import { 
  Container, 
  Title,
  IconContent,
  ContentTitle 
} from './styles';

interface PropsHeader {
  title: string;
  isBack?: boolean;
}

const Header = ({ title, isBack }: PropsHeader) => {
  const navigation = useNavigation();

  return(
    <Container positionText={isBack}>
      {isBack && (
       <IconContent onPress={() => navigation.goBack()}>
          <Icon 
            name="chevron-back-circle" 
            size={30} 
            color={theme.colors.title_secondary}
          />
       </IconContent>
      )}
      
      <ContentTitle>
        <Title>
          {title}
        </Title>
      </ContentTitle>
    </Container>
  );
}

export default Header;