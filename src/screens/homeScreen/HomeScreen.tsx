import SearchBar from '@components/SearchBar/SearchBar';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import hotels from '@assets/mock/hotels.json';
import vacations from '@assets/mock/vacations.json';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';
import AccountInfo from './components/AccountInfo/AccountInfo';
import Banner from './components/Banner/Banner';
import Menu from './components/Menu/Menu';
import FilterableSwiper from './components/FilterableSwiper/FilterableSwiper';

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
  padding-left: ${({ theme }) => theme.spacing(2)}px;
`;

const Description = styled.Text`
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
  padding-left: ${({ theme }) => theme.spacing(2)}px;
`;

const Content = styled.View`
  padding: ${({ theme }) => theme.spacing(1)}px 0;
`;

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <SearchBar onPress={() => navigation.navigate('Search')} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <AccountInfo />
        <Content>
          <Menu onPress={() => navigation.navigate('UnderConstruct')} />
          <Section>
            <Heading>Travenilo Deals!</Heading>
            <Description>Get discount up to 99% and special offers on various products</Description>
            <Banner onPress={() => Linking.openURL('https://fyfirman.tech')} />
          </Section>
          <Section>
            <Heading>Hotels</Heading>
            <Description>Best hotel pick to rest yourself</Description>
            <FilterableSwiper
              filterBy="city.id"
              filterOptions={[
                { key: 1, label: 'Bandung' },
                { key: 5, label: 'Surabaya' },
                { key: 3, label: 'Jakarta Pusat' },
                { key: 2, label: 'Jakarta Timur' },
                { key: 4, label: 'Jakarta Selatan' },
              ]}
              data={hotels}
              onPress={() => navigation.navigate('UnderConstruct')}
            />
          </Section>
          <Section>
            <Heading>Vacation</Heading>
            <Description>Best vacation to refresh your mind</Description>
            <FilterableSwiper
              filterBy="category"
              filterOptions={[
                { key: 'attraction', label: 'Attraction' },
                { key: 'playground', label: 'Playground' },
                { key: 'beauty', label: 'Beauty & Spa' },
              ]}
              data={vacations}
              onPress={() => navigation.navigate('UnderConstruct')}
            />
          </Section>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;
