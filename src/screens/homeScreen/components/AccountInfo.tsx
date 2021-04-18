import Avatar from '@components/Avatar';
import React from 'react';
import styled from 'styled-components/native';
import AccountAction from './AccountAction';

const Container = styled.View`
  background-color: ${({ theme }) => theme.palette.background.grey};
  width: 100%;
  padding: ${({ theme }) => theme.spacing(1)}px ${({ theme }) => theme.spacing(2)}px;
`;

const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing(1)}px;
`;

const NameText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.primary};
  margin-left: ${({ theme }) => theme.spacing(1)}px;
`;

const AccountInfo = () => {
  return (
    <Container>
      <InfoContainer>
        <Avatar source={require('@assets/images/avataaars.png')} />
        <NameText>Firmansyah Yanuar</NameText>
      </InfoContainer>
      <InfoContainer>
        <AccountAction
          label="My Points"
          onPress={() => console.log('Account actions')}
          style={{ marginRight: 8 }}
        />
        <AccountAction label="Payment" onPress={() => console.log('Account actions')} />
      </InfoContainer>
    </Container>
  );
};

export default AccountInfo;
