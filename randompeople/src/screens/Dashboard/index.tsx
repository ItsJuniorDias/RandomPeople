import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
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

interface PropsUsers {
  id: string;
  title: string;
  last: string;
  image: string;
};

const Dashboard = () => {
  const [data, setData] = useState<PropsUsers[]>([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Alejandro ',
      last: 'Marshall',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Bernice',
      last: 'Foster',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Gabija',
      last: 'Dawe',
      image: 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      id: 'bc9dda92-5409-4de7-bd5c-ebe91c6c74b5',
      title: 'Molly',
      last: 'Tapia',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      id: 'c68fb42f-2a34-4e67-8df9-6a1b35f06b87',
      title: 'Eduarda',
      last: 'Roth',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      id: 'b4f8b81e-8cf5-4cd8-b34f-565fd691eca6',
      title: 'Layla',
      last: 'Pham',
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
  ]);

  const { data: dataUsers } = useSelector(state => state);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(dataUsersRequest());
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

      {dataUsers && (
        <Content>
           <ActivityIndicator size="large" color={theme.colors.primary} />
         </Content>
      )}
       
      {!dataUsers && (
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
