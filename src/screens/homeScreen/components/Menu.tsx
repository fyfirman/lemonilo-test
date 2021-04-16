import arrayToMatrix from '@utils/arrayToMatrix';
import React from 'react';
import styled from 'styled-components/native';
import menuData, { IMenu } from './menu.data';
import MenuItem from './MenuItem';

const Container = styled.View`
  padding: 0;
`;

const MenuContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

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
