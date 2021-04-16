import React from 'react';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: ${({ theme }) => theme.borderRadius.small}px;
  padding: 4px 8px;
`;

const Label = styled.Text`
  font-size: 9px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.primary};
`;

interface AccountActionProps extends ViewProps {
  label: string;
  onPress?: () => any;
}

const AccountAction = ({ label, onPress, ...rest }: AccountActionProps) => {
  return (
    <Container onPress={onPress} {...rest}>
      <Label>{label}</Label>
    </Container>
  );
};

export default AccountAction;
