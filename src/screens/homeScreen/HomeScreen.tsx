import SearchBar from '@components/SearchBar';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import AccountInfo from './components/AccountInfo';
import MenuItem from './components/MenuItem';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.lightGrey};
`;

const Content = styled.View`
  padding: ${({ theme }) => theme.spacing(1)}px ${({ theme }) => theme.spacing(2)}px;
`;

const MenuContainer = styled.View`
  flex-direction: row;
`;

const HomeScreen = () => {
  return (
    <Container>
      <SearchBar onFocus={() => console.log('TODO : to search screen')} />
      <ScrollView>
        <AccountInfo />
        <Content>
          <MenuContainer>
            <MenuItem
              imageUri="https://reactnative.dev/img/tiny_logo.png"
              label="Flight"
              onPress={() => console.log('TODO: go to menu screen')}
            />
            <MenuItem
              imageUri="https://reactnative.dev/img/tiny_logo.png"
              label="Flight"
              onPress={() => console.log('TODO: go to menu screen')}
            />
          </MenuContainer>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;
