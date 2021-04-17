import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import HighlightItem, { HighlightItemData } from './HighlightItem';

const Container = styled.View`
  padding: ${({ theme }) => theme.spacing(1)}px 0;
`;

interface HighlightSwiperProps {
  data: HighlightItemData[];
  onPress: (value: HighlightItemData) => any;
}

const HighlightSwiper = ({ data, onPress }: HighlightSwiperProps) => {
  const handlePress = (value: HighlightItemData) => onPress(value);

  const renderItem = () =>
    data.map((item: HighlightItemData, index) => (
      <HighlightItem
        key={index}
        name={item.name}
        price={item.price}
        rating={item.rating}
        imageUri={item.imageUri}
        onPress={() => handlePress(item)}
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

export default HighlightSwiper;
