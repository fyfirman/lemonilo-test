import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import FilterButton from './FilterButton';
import HighlightItem, { HighlightItemData } from './HighlightItem';

const Container = styled.View`
  padding: ${({ theme }) => theme.spacing(1)}px 0;
`;

const Heading = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const Description = styled.Text`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const FilterContainer = styled.View`
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`;

const ItemContainer = styled.ScrollView`
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`;

interface HighlightSwiperProps {
  heading: string;
  description: string;
  data: HighlightItemData[];
  onPress: (value: HighlightItemData) => any;
}

const HighlightSwiper = (props: HighlightSwiperProps) => {
  const { heading, description, data, onPress } = props;

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
      <Heading>{heading}</Heading>
      <Description>{description}</Description>
      <FilterContainer>
        <FilterButton title="Button" onPress={() => console.log('Filter pressed')} active />
        <FilterButton title="Button" onPress={() => console.log('Filter pressed')} />
        <FilterButton title="Button" onPress={() => console.log('Filter pressed')} />
      </FilterContainer>
      <ItemContainer horizontal showsHorizontalScrollIndicator={false}>
        {renderItem()}
      </ItemContainer>
    </Container>
  );
};

export default HighlightSwiper;
