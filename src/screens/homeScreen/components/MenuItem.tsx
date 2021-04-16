import Avatar from '@components/Avatar';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacing(1)}px;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
  align-items: center;
`;

const IconContainer = styled.View<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  padding: ${({ theme }) => theme.spacing(1)}px;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.round}px;
`;

const Label = styled.Text`
  color: ${({ theme }) => theme.palette.text.primary};
`;

interface MenuItemProps {
  label: string;
  imageUri?: string;
  backgroundColor?: string;
  onPress: () => any;
}

const MenuItem = (props: MenuItemProps) => {
  const { label, imageUri, backgroundColor, onPress } = props;
  return (
    <Container onPress={onPress}>
      <IconContainer backgroundColor={backgroundColor ?? '#F00'}>
        <Avatar source={{ uri: imageUri }} size={32} />
      </IconContainer>
      <Label>{label}</Label>
    </Container>
  );
};

export default MenuItem;
