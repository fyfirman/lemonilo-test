import React from 'react';
import styled from 'styled-components/native';
import HighlightItem, { HighlightItemData } from '../HighlightItem/HighlightItem';

const ItemContainer = styled.ScrollView`
  padding-left: ${({ theme }) => theme.spacing(2)}px;
`;

interface HighlightSwiperProps {
  data: HighlightItemData[];
  onPress: (value: HighlightItemData) => any;
}

const HighlightSwiper = (props: HighlightSwiperProps) => {
  const { data, onPress } = props;

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
    <ItemContainer horizontal showsHorizontalScrollIndicator={false}>
      {renderItem()}
    </ItemContainer>
  );
};

export default HighlightSwiper;
