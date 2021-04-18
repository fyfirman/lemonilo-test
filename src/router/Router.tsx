import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '@screens/searchScreen/SearchScreen';
import UnderConstruct from '@components/UnderConstruct/UnderConstruct';
import HomeTabsRouter from './HomeTabs.router';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Landing" component={HomeTabsRouter} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="UnderConstruct" component={UnderConstruct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
