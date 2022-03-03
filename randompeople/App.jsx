import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components'; 

import { Provider } from 'react-redux';
import store from './src/store';

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';

import theme from './src/global/styles/theme';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
            <StatusBar
              barStyle="light-content" 
              backgroundColor={theme.colors.primary}
            />
            <AppRoutes />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};


export default App;
