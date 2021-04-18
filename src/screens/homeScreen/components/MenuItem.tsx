import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-ionicons';
import myTheme from '@theme/theme';

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
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.round}px;
  aspect-ratio: 1;
`;

const Label = styled.Text`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 11px;
  text-align: center;
`;

interface MenuItemProps {
  label: string;
  iconName: string;
  backgroundColor?: string;
  onPress: () => any;
  width: number;
}

const MenuItem = (props: MenuItemProps) => {
  const { label, iconName, backgroundColor, width, onPress } = props;
  return (
    <Container width={width} onPress={onPress}>
      <IconContainer backgroundColor={backgroundColor ?? myTheme.palette.menu.default}>
        <Icon
          size={32}
          name={iconName}
          color={backgroundColor ? '#FFFFFF' : '#555'}
        />
      </IconContainer>
      <Label>{label}</Label>
    </Container>
  );
};

export default MenuItem;
