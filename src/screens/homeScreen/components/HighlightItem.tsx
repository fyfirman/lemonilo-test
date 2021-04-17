import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
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

export interface HighlightItemData {
  name: string;
  price: number;
  rating?: number;
  imageUri: string;
}

interface HighlightItemProps extends HighlightItemData {
  onPress: () => any;
}

const HighlightItem = (props: HighlightItemProps) => {
  const { name, price, imageUri, onPress } = props;

  return (
    <Container onPress={onPress}>
      <Photo source={{ uri: imageUri }} resizeMode="cover" />
      <Name>{name}</Name>
      <Price>{`Rp ${price}`}</Price>
    </Container>
  );
};

export default HighlightItem;
