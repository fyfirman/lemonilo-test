import * as React from 'react';
import {
  SafeAreaView, ScrollView, StatusBar, useColorScheme,
} from 'react-native';

import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';

const HelloWorld = styled.Text`
  background-color: #ff0000;
`;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <Header />
        <HelloWorld>Hello world</HelloWorld>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
