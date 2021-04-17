import SearchBar from '@components/SearchBar';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import hotels from '@assets/mock/hotels.json';
import vacations from '@assets/mock/vacations.json';
import useFilterData from '@utils/useFilterData';
import AccountInfo from './components/AccountInfo';
import Banner from './components/Banner';
import HighlightSwiper from './components/HighlightSwiper';
import Menu from './components/Menu';
import FilterButton from './components/FilterButton';

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

const FilterContainer = styled.ScrollView`
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`;

const HomeScreen = () => {
  const hotelState = useFilterData(hotels, 'city.id');

  const handleFilter = (cityId?: number) => {
    hotelState.setFilter(cityId);
  };

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
            <FilterContainer horizontal showsHorizontalScrollIndicator={false}>
              <FilterButton onPress={() => handleFilter()} title="All" active />
              <FilterButton onPress={() => handleFilter(1)} title="Bandung" />
              <FilterButton onPress={() => handleFilter(5)} title="Surabaya" />
              <FilterButton onPress={() => handleFilter(3)} title="Jakarta Pusat" />
              <FilterButton onPress={() => handleFilter(2)} title="Jakarta Timur" />
              <FilterButton onPress={() => handleFilter(4)} title="Jakarta Selatan" />
            </FilterContainer>
            <HighlightSwiper
              heading="Vacation"
              description=""
              data={hotelState.data}
              onPress={(item) => console.log(`${item.name} pressed`)}
            />
          </Section>
          <Section>
            <Heading>Vacation</Heading>
            <Description>Best vacation to refresh your mind</Description>
            <FilterContainer horizontal showsHorizontalScrollIndicator={false}>
              <FilterButton onPress={() => console.log('filter pressed')} title="Test" active />
              <FilterButton onPress={() => console.log('filter pressed')} title="Test" />
              <FilterButton onPress={() => console.log('filter pressed')} title="Test" />
            </FilterContainer>
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
