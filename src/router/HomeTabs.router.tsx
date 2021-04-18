import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/homeScreen/HomeScreen';
import SavedScreen from '@screens/savedScreen/SavedScreen';
import MyBookingScreen from '@screens/myBookingScreen/MyBookingScreen';
import MyInboxScreen from '@screens/myInboxScreen/MyInboxScreen';
import MyAccountScreen from '@screens/myAccountScreen/MyAccountScreen';
import theme from '@theme/theme';

const Tab = createBottomTabNavigator();

const HomeTabsRouter = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.palette.primary.main,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="Saved" component={SavedScreen} options={{ title: 'Saved' }} />
      <Tab.Screen name="MyBooking" component={MyBookingScreen} options={{ title: 'My Booking' }} />
      <Tab.Screen name="MyInbox" component={MyInboxScreen} options={{ title: 'My Inbox' }} />
      <Tab.Screen name="MyAccount" component={MyAccountScreen} options={{ title: 'My Account' }} />
    </Tab.Navigator>
  );
};

export default HomeTabsRouter;
