import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';
import theme from '@theme/theme';
import 'react-native-gesture-handler';
import Router from '@router/Router';

const Container = styled.View`
  flex: 1;
`;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Container>
        <Router />
      </Container>
    </ThemeProvider>
  );
};

export default App;
