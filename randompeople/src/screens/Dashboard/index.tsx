import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";

import { dataUsersRequest } from '../../store/modules/users/actions';

import Header from '../../components/Header';
import CardPeople, { PropsCardDTO } from '../../components/CardPeople';

import { Nav } from '../../utils/types';

import { 
  Container,
  Content 
} from './styles';

import api from '../../services/api';
import theme from '../../global/styles/theme';
import { database } from '../../database';

interface PropsUsers {
  id: string;
  title: string;
  last: string;
  image: string;
};

const Dashboard = () => {
  const { data: dataUsers } = useSelector(state => state);
  // console.log(dataUsers, 'Users');

  const windowHeight = Dimensions.get('window').height;

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(dataUsersRequest())
  }, []);

  useEffect(() => {
     async function loadData() {
       const userCollection = database.get('users');
       const users = await userCollection.query().fetch();
       console.log(users, 'USERS DATA COLLECTION')
     }

     loadData()
  }, []);

  const { navigate } = useNavigation<Nav>();

  const handleDetails = () => {
    navigate('Details');
  }

  const renderItem = ({ item }: PropsCardDTO) => {
   const { login: { uuid }, name: { first, last }, picture: { thumbnail }} = item;

   return(
    <CardPeople
      key={uuid} 
      id={uuid}
      title={first}
      last={last} 
      image={thumbnail}
      onPress={handleDetails}
    />
  )};

  return (
    <Container>
      <Header title="Dashboard" />

      {dataUsers.length === 0 && (
        <Content windowHeight={windowHeight}>
           <ActivityIndicator size="large" color={theme.colors.primary} />
         </Content>
      )}
       
      {dataUsers && (
        <FlatList
         data={dataUsers}
         renderItem={renderItem}
         keyExtractor={({ login }) => login.uuid?.toString()}
        />
      )}
      
    </Container>
  );
};

export default Dashboard;
