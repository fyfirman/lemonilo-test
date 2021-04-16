import * as React from 'react';
import {
  SafeAreaView, ScrollView, StatusBar, useColorScheme,
} from 'react-native';

import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import styled, { ThemeProvider } from 'styled-components/native';
import theme from '@theme/theme';

const HelloWorld = styled.Text`
  background-color: ${(props) => props.theme.palette.primary.main};
`;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
          <Header />
          <HelloWorld>Hello world</HelloWorld>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
