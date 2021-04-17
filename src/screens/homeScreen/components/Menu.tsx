import arrayToMatrix from '@utils/arrayToMatrix';
import React from 'react';
import styled from 'styled-components/native';
import MenuItem from './MenuItem';

const Container = styled.View`
  padding: 0;
`;

const MenuContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

interface IMenu {
  label: string;
  imageUri: string;
}

const menuData : IMenu[] = [
  { label: 'Flight', imageUri: 'https://reactnative.dev/img/tiny_logo.png' },
  { label: 'Hotels', imageUri: 'https://reactnative.dev/img/tiny_logo.png' },
  { label: 'Flight + Hotel', imageUri: 'https://reactnative.dev/img/tiny_logo.png' },
  { label: 'Eats', imageUri: 'https://reactnative.dev/img/tiny_logo.png' },
  { label: 'Trains', imageUri: 'https://reactnative.dev/img/tiny_logo.png' },
  { label: 'Buses & Shuttles', imageUri: 'https://reactnative.dev/img/tiny_logo.png' },
  { label: 'Cars', imageUri: 'https://reactnative.dev/img/tiny_logo.png' },
  { label: 'Motor- cycle', imageUri: 'https://reactnative.dev/img/tiny_logo.png' },
  { label: 'Finance', imageUri: 'https://reactnative.dev/img/tiny_logo.png' },
  { label: 'All Products', imageUri: 'https://reactnative.dev/img/tiny_logo.png' },
];

const Menu = () => {
  const renderMenuItems = () =>
    arrayToMatrix(menuData, 5).map((row: IMenu[], rowIndex) => (
      <MenuContainer key={rowIndex}>
        {row.map(({ label, imageUri }, index) => (
          <MenuItem
            key={index}
            label={label}
            imageUri={imageUri}
            width={45}
            onPress={() => console.log('TODO: go to menu screen')}
          />
        ))}
      </MenuContainer>
    ));

  return <Container>{renderMenuItems()}</Container>;
};

export default Menu;
