import SearchBar from '@components/SearchBar';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import AccountInfo from './components/AccountInfo';
import menuData from './components/menu.data';
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
  const renderMenuItems = () =>
    menuData.map(({ label, imageUri }, index) => (
      <MenuItem
        label={label}
        imageUri={imageUri}
        key={index}
        onPress={() => console.log('TODO: go to menu screen')}
      />
    ));

  return (
    <Container>
      <SearchBar onFocus={() => console.log('TODO : to search screen')} />
      <ScrollView>
        <AccountInfo />
        <Content>
          <MenuContainer>{renderMenuItems()}</MenuContainer>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;
