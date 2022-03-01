import React from 'react';
import { View } from 'react-native';

import { 
  Container, 
  Title,
  Picture,
  Content,
  LastName 
} from './styles';

interface PropsCard {
  id: string;
  title: string;
  last: string;
  image: string;
  onPress:() => void;
}

export interface PropsCardDTO {
  item: PropsCard;
}

const CardPeople = ({ id, image, last, title, onPress }: PropsCard) => {
  return(
    <Container onPress={onPress} activeOpacity={0.6}>
      <Picture source={{ uri: `${image}`}}  />

     <Content>
      <Title>
        {title}
      </Title>
      <LastName>
        {last}
      </LastName>
    </Content>  
    </Container>
  );
}

export default CardPeople;