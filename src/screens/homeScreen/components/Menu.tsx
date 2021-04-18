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
  iconName: string;
}

const menuData: IMenu[] = [
  { label: 'Flight', iconName: 'home' },
  { label: 'Hotels', iconName: 'home' },
  { label: 'Flight + Hotel', iconName: 'home' },
  { label: 'Eats', iconName: 'home' },
  { label: 'Trains', iconName: 'home' },
  { label: 'Buses & Shuttles', iconName: 'home' },
  { label: 'Cars', iconName: 'home' },
  { label: 'Motor- cycle', iconName: 'home' },
  { label: 'Finance', iconName: 'home' },
  { label: 'All Products', iconName: 'home' },
];

const Menu = () => {
  const renderMenuItems = () =>
    arrayToMatrix(menuData, 5).map((row: IMenu[], rowIndex) => (
      <MenuContainer key={rowIndex}>
        {row.map(({ label, iconName }, index) => (
          <MenuItem
            key={index}
            label={label}
            iconName={iconName}
            width={45}
            onPress={() => console.log('TODO: go to menu screen')}
          />
        ))}
      </MenuContainer>
    ));

  return <Container>{renderMenuItems()}</Container>;
};

export default Menu;
