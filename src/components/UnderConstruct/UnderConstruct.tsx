import React from 'react';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.lightGrey};
`;

const Lottie = styled(LottieView)`
  width: 50%;
`;

const Description = styled.Text`
  color: ${({ theme }) => theme.palette.text.primary};
  padding: ${({ theme }) => theme.spacing(2)}px;
`;

const UnderConstruct = () => {
  return (
    <Container>
      <Lottie source={require('@assets/lotties/12366-under-construction.json')} autoPlay loop />
      <Description>This page or feature is under construct</Description>
    </Container>
  );
};

export default UnderConstruct;
