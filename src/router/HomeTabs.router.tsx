import React from 'react';
import Icon from 'react-native-ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/homeScreen/HomeScreen';
import theme from '@theme/theme';
import UnderConstruct from '@components/UnderConstruct/UnderConstruct';

const Tab = createBottomTabNavigator();

const HomeTabsRouter = () => {
  const getTabBarIcon = (name: string) => ({
    color,
    size,
  }: {
    focused: boolean;
    color: string;
    size: number;
  }) => <Icon color={color} size={size} name={name} />;

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.palette.primary.main,
        tabStyle: {
          paddingTop: 6,
          paddingBottom: 6,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home', tabBarIcon: getTabBarIcon('home') }}
      />
      <Tab.Screen
        name="Saved"
        component={UnderConstruct}
        options={{ title: 'Saved', tabBarIcon: getTabBarIcon('bookmark') }}
      />
      <Tab.Screen
        name="MyBooking"
        component={UnderConstruct}
        options={{ title: 'My Booking', tabBarIcon: getTabBarIcon('bookmarks') }}
      />
      <Tab.Screen
        name="MyInbox"
        component={UnderConstruct}
        options={{ title: 'My Inbox', tabBarIcon: getTabBarIcon('mail-open') }}
      />
      <Tab.Screen
        name="MyAccount"
        component={UnderConstruct}
        options={{ title: 'My Account', tabBarIcon: getTabBarIcon('contact') }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabsRouter;
