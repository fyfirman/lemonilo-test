import React from 'react';
import styled from 'styled-components/native';

const Container = styled.Pressable`
  width: 150px;
  margin-right: ${({ theme }) => theme.spacing(2)}px;
`;

const Photo = styled.Image`
  border-radius: ${({ theme }) => theme.borderRadius.small}px;
  aspect-ratio: 1;
`;

const Name = styled.Text`
  color: ${({ theme }) => theme.palette.text.primary};
`;

const Price = styled.Text`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

interface HotelItemProps {
  name: string;
  price: number;
  rating: number;
  imageUri: string;
  onPress: () => any;
}

const HotelItem = (props: HotelItemProps) => {
  const { name, price, imageUri, onPress } = props;

  return (
    <Container onPress={onPress}>
      <Photo source={{ uri: imageUri }} resizeMode="cover" />
      <Name>{name}</Name>
      <Price>{`Rp ${price}`}</Price>
    </Container>
  );
};

export default HotelItem;
