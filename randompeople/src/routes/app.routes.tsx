import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen} = createNativeStackNavigator();

import Dashboard from '../screens/Dashboard';
import Details from '../screens/Details';

export function AppRoutes() {
  return(
    <Navigator
      screenOptions={{
        headerShown: false, 
      }}
    >
      <Screen
        name="Dashboard"
        component={Dashboard}
      />

      <Screen
        name="Details"
        component={Details}
      />
    </Navigator>
  )
}