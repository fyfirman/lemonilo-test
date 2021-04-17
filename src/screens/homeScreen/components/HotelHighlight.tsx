import IHotel from 'models/hotel';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import hotels from './hotel';
import HotelItem from './HotelItem';

const Container = styled.View`
  padding: ${({ theme }) => theme.spacing(1)}px 0;
`;

const HotelHighlight = () => {
  const renderItem = () =>
    hotels.map((hotel: IHotel) => (
      <HotelItem
        key={hotel.id}
        name={hotel.name}
        price={hotel.price}
        rating={hotel.rating}
        imageUri={hotel.imageUri}
        onPress={() => console.log('Hello world')}
      />
    ));

  return (
    <Container>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {renderItem()}
      </ScrollView>
    </Container>
  );
};

export default HotelHighlight;
