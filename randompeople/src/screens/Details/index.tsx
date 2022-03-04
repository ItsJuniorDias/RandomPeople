import React from 'react';
import { ScrollView } from 'react-native';

import Header from '../../components/Header';
import TextComponent from '../../components/TextComponent';

import { 
  Container,
  Content,
  Profile,
  Scroll
} from './styles';

const Details = ({ route }) => {
  const user = route.params;

  const { picture_thumbnail, name_title, name_first, name_last,
    gender, email, location_city, location_country, location_state,
    phone, cell
  } = user;

  console.log(user);

  return (
     <>
      <Header 
        title='Details' 
        isBack  
      />

      <Content>
        <Scroll>
          <Container>
          <Profile source={{ uri: `${picture_thumbnail}` }}  />

          <TextComponent 
            title='Name' 
            subtitle={`${name_title} ${name_first} ${name_last}`}  
          />
          
          <TextComponent 
            title='Gender' 
            subtitle={`${gender}`}  
          />

          <TextComponent 
            title='Email' 
            subtitle={`${email}`}  
          />

          <TextComponent 
            title='Location' 
            subtitle={`${location_city}, ${location_country} - ${location_state}`}  
          />

          <TextComponent 
            title='Phone' 
            subtitle={`${phone}/${cell}`}  
          />
        </Container>
       </Scroll>
      </Content>
      
    </>
  );
}

export default Details;