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
  color?: string;
}

const menuData: IMenu[] = [
  { label: 'Flight', iconName: 'home', color: '#2FC6F3' },
  { label: 'Hotels', iconName: 'home', color: '#1D4F80' },
  { label: 'Flight + Hotel', iconName: 'home', color: '#8C1981' },
  { label: 'Eats', iconName: 'home', color: '#FD6560' },
  { label: 'Trains', iconName: 'home', color: '#E75723' },
  { label: 'Buses & Shuttles', iconName: 'home', color: '#FAA202' },
  { label: 'Cars', iconName: 'home', color: '#21C759' },
  { label: 'Motor- cycle', iconName: 'home', color: '#0D7377' },
  { label: 'Finance', iconName: 'home', color: '#014165' },
  { label: 'All Products', iconName: 'home' },
];

const Menu = () => {
  const renderMenuItems = () =>
    arrayToMatrix(menuData, 5).map((row: IMenu[], rowIndex) => (
      <MenuContainer key={rowIndex}>
        {row.map(({ label, iconName, color }, index) => (
          <MenuItem
            key={index}
            label={label}
            iconName={iconName}
            backgroundColor={color}
            width={45}
            onPress={() => console.log('TODO: go to menu screen')}
          />
        ))}
      </MenuContainer>
    ));

  return <Container>{renderMenuItems()}</Container>;
};

export default Menu;
