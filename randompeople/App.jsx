import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components'; 

import theme from './src/global/styles/theme';

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';

const App = () => {
  return (
     <ThemeProvider theme={theme}>
       <NavigationContainer>
          <StatusBar
            barStyle="light-content" 
            backgroundColor={theme.colors.primary}
          />
          <AppRoutes />
       </NavigationContainer>
    </ThemeProvider>
  );
};


export default App;
