import React from 'react';
import styled from 'styled-components/native';
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
      <ItemContainer horizontal showsHorizontalScrollIndicator={false}>
        {renderItem()}
      </ItemContainer>
    </Container>
  );
};

export default HighlightSwiper;
