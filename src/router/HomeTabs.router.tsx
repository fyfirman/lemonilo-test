import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/homeScreen/HomeScreen';
import SavedScreen from '@screens/savedScreen/SavedScreen';
import MyBookingScreen from '@screens/myBookingScreen/MyBookingScreen';
import MyInboxScreen from '@screens/myInboxScreen/MyInboxScreen';
import MyAccountScreen from '@screens/myAccountScreen/MyAccountScreen';

const Tab = createBottomTabNavigator();

const HomeTabsRouter = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name="MyBooking" component={MyBookingScreen} />
      <Tab.Screen name="MyInbox" component={MyInboxScreen} />
      <Tab.Screen name="MyAccount" component={MyAccountScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabsRouter;
