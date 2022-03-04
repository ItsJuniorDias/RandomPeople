import React from 'react';
import { View } from 'react-native';

import { TextContent, Title, SubTitle } from './styles';

interface Props {
  title: string;
  subtitle: string;
}

const TextComponent = ({ title, subtitle}: Props) => {
  return(
    <TextContent>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </TextContent>
  );
}

export default TextComponent;