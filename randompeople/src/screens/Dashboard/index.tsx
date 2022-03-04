import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Dimensions, Alert } from 'react-native';
import { useNetInfo} from "@react-native-community/netinfo";

import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";

import { dataUsersRequest } from '../../store/modules/users/actions';

import Header from '../../components/Header';
import CardPeople, { PropsCardDTO } from '../../components/CardPeople';

import { Nav } from '../../utils/types';

import api from '../../services/api';
import theme from '../../global/styles/theme';
import { database } from '../../database';

import { User } from '../../database/model/User';

import { 
  Container,
  Content 
} from './styles';

interface PropsUsers {
  id: string;
  title: string;
  last: string;
  image: string;
};

const Dashboard = ({ navigation }) => {
  const [ dataUserCollection, setDataUserCollection ] = useState([]);

  const { data: dataUsers } = useSelector(state => state);

  const windowHeight = Dimensions.get('window').height;

  const dispatch = useDispatch();
  const netInfo = useNetInfo();

  useEffect(() => {
    dispatch(dataUsersRequest())
  }, []);

  useEffect(() => {
    async function loadCollectionUser() {
      try {
        const userCollection = database.get<User>('users');
        const userDataCollection = await userCollection.query().fetch();

        if(userDataCollection.length === 0) {
          for (let user of dataUsers) {
            await database.action(async() => {
              await userCollection.create((newUsers) => {
                newUsers.user_id = user.login.uuid,
                newUsers.name_title = user.name.title,
                newUsers.name_first = user.name.first,
                newUsers.name_last = user.name.last,
                newUsers.gender = user.gender,
                newUsers.picture_large =  user.picture.large,
                newUsers.picture_thumbnail = user.picture.thumbnail,
                newUsers.email =  user.email,
                newUsers.location_city = user.location.city,
                newUsers.location_country = user.location.country,
                newUsers.location_state = user.location.state,
                newUsers.phone =  user.phone,
                newUsers.cell = user.cell
              });
            })
          }
        }

         const response = await userCollection.query().fetch();

         setDataUserCollection(response);
      }catch(e) {
        console.log(e)
      }
    }

    loadCollectionUser()
  }, [dataUsers]);

  useEffect(() => {
     if(netInfo.isConnected) {
       Alert.alert('Você está online');
     } else {
       Alert.alert('Você esta offline');
     }
  }, [netInfo.isConnected]);

  const handleDetails = (userData) => {
    navigation.navigate('Details', userData);
  }

  const renderItem = ({ item }: PropsCardDTO) => {

   return(
    <CardPeople
      key={item.user_id} 
      id={item.user_id}
      title={item.name_first}
      last={item.name_last} 
      image={item.picture_thumbnail}
      onPress={() => handleDetails(item)}
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
         data={dataUserCollection}
         renderItem={renderItem}
         keyExtractor={(item) => item.user_id?.toString()}
        />
      )}
      
    </Container>
  );
};

export default Dashboard;
