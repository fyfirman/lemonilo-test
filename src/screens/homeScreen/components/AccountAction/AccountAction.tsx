import myTheme from '@theme/theme';
import React from 'react';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.Pressable`
  background-color: #fff;
  border-radius: ${({ theme }) => theme.borderRadius.small}px;
  padding: 4px 8px;
`;

const Label = styled.Text`
  font-size: 11px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.primary};
`;

interface AccountActionProps extends ViewProps {
  label: string;
  onPress?: () => any;
}

const AccountAction = ({ label, onPress, ...rest }: AccountActionProps) => {
  return (
    <Container
      onPress={onPress}
      android_ripple={{ color: myTheme.palette.ripple.grey, radius: 30 }}
      {...rest}
    >
      <Label>{label}</Label>
    </Container>
  );
};

export default AccountAction;
