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
  { label: 'Flight', iconName: 'airplane', color: '#2FC6F3' },
  { label: 'Hotels', iconName: 'bed', color: '#1D4F80' },
  { label: 'Flight + Hotel', iconName: 'business', color: '#8C1981' },
  { label: 'Eats', iconName: 'restaurant', color: '#FD6560' },
  { label: 'Trains', iconName: 'train', color: '#E75723' },
  { label: 'Buses & Shuttles', iconName: 'bus', color: '#FAA202' },
  { label: 'Cars', iconName: 'car', color: '#21C759' },
  { label: 'Vacation', iconName: 'map', color: '#0D7377' },
  { label: 'Finance', iconName: 'cash', color: '#014165' },
  { label: 'All Products', iconName: 'grid' },
];

interface MenuProps {
  onPress: (menu: IMenu) => any;
}

const Menu = ({ onPress }: MenuProps) => {
  const renderMenuItems = () =>
    arrayToMatrix(menuData, 5).map((row: IMenu[], rowIndex) => (
      <MenuContainer key={rowIndex}>
        {row.map((menu, index) => (
          <MenuItem
            key={index}
            label={menu.label}
            iconName={menu.iconName}
            backgroundColor={menu.color}
            width={45}
            onPress={() => onPress(menu)}
          />
        ))}
      </MenuContainer>
    ));

  return <Container>{renderMenuItems()}</Container>;
};

export default Menu;
