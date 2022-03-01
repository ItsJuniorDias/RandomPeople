import React from 'react';
import { View } from 'react-native';

import { Container, Title } from './styles';

interface PropsHeader {
  title: string;
}

const Header = ({ title }: PropsHeader) => {
  return(
    <Container>
      <Title>
        {title}
      </Title>
    </Container>
  );
}

export default Header;