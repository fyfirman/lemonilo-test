import SearchBar from '@components/SearchBar';
import React from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;

const HomeScreen = () => {
  return (
    <Container>
      <SearchBar onFocus={() => console.log('TODO : to search screen')} />
      <ScrollView>
        <Text>Homescreen</Text>
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;
