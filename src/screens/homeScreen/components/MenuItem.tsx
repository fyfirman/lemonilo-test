import Avatar from '@components/Avatar';
import myTheme from '@theme/theme';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity<{ width: number }>`
  padding: ${({ theme }) => theme.spacing(1)}px 0px;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
  align-items: center;
  width: ${(props) => props.width}px;
`;

const IconContainer = styled.View<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  padding: ${({ theme }) => theme.spacing(1)}px;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.round}px;
`;

const Label = styled.Text`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 11px;
  text-align: center;
`;

interface MenuItemProps {
  label: string;
  imageUri?: string;
  backgroundColor?: string;
  onPress: () => any;
  width: number;
}

const MenuItem = (props: MenuItemProps) => {
  const { label, imageUri, backgroundColor, width, onPress } = props;
  return (
    <Container width={width} onPress={onPress}>
      <IconContainer backgroundColor={backgroundColor ?? myTheme.palette.menu.default}>
        <Avatar source={{ uri: imageUri }} size={36} />
      </IconContainer>
      <Label>{label}</Label>
    </Container>
  );
};

export default MenuItem;
