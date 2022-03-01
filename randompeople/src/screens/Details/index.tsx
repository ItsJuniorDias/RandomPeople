import React from 'react';
import { View } from 'react-native';

import Header from '../../components/Header';

import { Container } from './styles';

const Details = () => {
  return (
    <Container>
      <Header 
        title='Details' 
        isBack  
      />
      
    </Container> 
  );
}

export default Details;