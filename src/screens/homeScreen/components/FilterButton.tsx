import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View<{ active: boolean }>`
  padding: ${({ theme }) => theme.spacing(1)}px ${({ theme }) => theme.spacing(2)}px;
  background-color: ${({ theme, active }) =>
    (active ? theme.palette.primary.main : theme.palette.background.grey)};
  margin-right: ${({ theme }) => theme.spacing(1)}px;
  border-radius: ${({ theme }) => theme.borderRadius.small}px;
`;

const Label = styled.Text<{ active: boolean }>`
  color: ${({ theme, active }) => (active ? '#fff' : theme.palette.primary.main)};
  font-weight: bold;
`;

interface FilterButtonProps {
  active?: boolean;
  title: string;
  onPress: () => any;
}

const FilterButton = ({ title, onPress, active = false }: FilterButtonProps) => {
  return (
    <Container active={active}>
      <TouchableNativeFeedback onPress={onPress}>
        <Label active={active}>{title}</Label>
      </TouchableNativeFeedback>
    </Container>
  );
};

export default FilterButton;
