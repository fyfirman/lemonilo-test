import React from 'react';
import styled from 'styled-components/native';

const Container = styled.Pressable`
  padding: ${({ theme }) => theme.spacing(1)}px ${({ theme }) => theme.spacing(2)}px;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const InputContainer = styled.View`
  background-color: #fff;
  border-radius: 4px;
  padding-left: ${({ theme }) => theme.spacing(1)}px;
  padding-right: ${({ theme }) => theme.spacing(1)}px;
`;

const SearchInput = styled.TextInput`
  font-size: 12px;
  height: 36px;
`;

interface SearchBarProps {
  onPress?: () => any;
}

const SearchBar = ({ onPress }: SearchBarProps) => {
  return (
    <Container onPress={onPress}>
      <InputContainer>
        <SearchInput placeholder="Search items, destinations..." editable={false} />
      </InputContainer>
    </Container>
  );
};

export default SearchBar;
