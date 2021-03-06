import SearchBar from '@components/SearchBar/SearchBar';
import UnderConstruct from '@components/UnderConstruct/UnderConstruct';
import React from 'react';

import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;

const SearchScreen = () => {
  return (
    <Container>
      <SearchBar />
      <UnderConstruct />
    </Container>
  );
};

export default SearchScreen;
