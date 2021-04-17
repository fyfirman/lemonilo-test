import myTheme from '@theme/theme';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.Pressable<{ active: boolean }>`
  background-color: ${({ theme, active }) =>
    (active ? theme.palette.primary.main : theme.palette.background.grey)};
  margin-right: ${({ theme }) => theme.spacing(1)}px;
  border-radius: ${({ theme }) => theme.borderRadius.small}px;
`;

const Label = styled.Text<{ active: boolean }>`
  padding: ${({ theme }) => theme.spacing(1)}px ${({ theme }) => theme.spacing(2)}px;
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
    <Container
      active={active}
      onPress={onPress}
      disabled={active}
      android_ripple={{ color: myTheme.palette.primary.light, radius: 50 }}
    >
      <Label active={active}>{title}</Label>
    </Container>
  );
};

export default FilterButton;
