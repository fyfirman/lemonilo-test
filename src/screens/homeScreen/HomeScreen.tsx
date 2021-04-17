import SearchBar from '@components/SearchBar';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import hotels from '@assets/mock/hotels.json';
import vacations from '@assets/mock/vacations.json';
import AccountInfo from './components/AccountInfo';
import Banner from './components/Banner';
import HighlightSwiper from './components/HighlightSwiper';
import Menu from './components/Menu';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.lightGrey};
`;

const Section = styled.View`
  padding: ${({ theme }) => theme.spacing(1)}px 0;
`;

const Heading = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const Description = styled.Text`
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`;

const Content = styled.View`
  padding: ${({ theme }) => theme.spacing(1)}px ${({ theme }) => theme.spacing(2)}px;
`;

const HomeScreen = () => {
  return (
    <Container>
      <SearchBar onFocus={() => console.log('TODO : to search screen')} />
      <ScrollView>
        <AccountInfo />
        <Content>
          <Menu />
          <Section>
            <Heading>Travelemon Deals!</Heading>
            <Description>Get discount up to 99% and special offers on various products</Description>
            <Banner
              imageUri="https://via.placeholder.com/350x150"
              onPress={() => console.log('Banner pressed')}
            />
          </Section>
          <Section>
            <Heading>Hotels</Heading>
            <Description>Best hotel pick to rest yourself</Description>
            <HighlightSwiper
              heading="Vacation"
              description=""
              data={hotels}
              onPress={(item) => console.log(`${item.name} pressed`)}
            />
          </Section>
          <Section>
            <Heading>Vacation</Heading>
            <Description>Best vacation to refresh your mind</Description>
            <HighlightSwiper
              heading="Vacation"
              description=""
              data={vacations.attraction}
              onPress={(item) => console.log(`${item.name} pressed`)}
            />
          </Section>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;
