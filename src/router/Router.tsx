import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeTabsRouter from './HomeTabs.router';

const Router = () => {
  return (
    <NavigationContainer>
      <HomeTabsRouter />
    </NavigationContainer>
  );
};

export default Router;