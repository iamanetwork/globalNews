import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import BookMarkScreen from '../screens/bookmark/BookMarkScreen';
import HomeIcon from '../assets/svg/HomeIcon';
import BookMarkIcon from '../assets/svg/BookMarkIcon';
import { DeviceHeight, DeviceWidth } from '../constants/CommonConstants';

const Tabs = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tabs.Navigator
      screenOptions={() => ({
        headerShadowVisible: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 0,
          elevation: 0,
          bottom: DeviceHeight / 105.5,
          height: DeviceHeight / 14.06,
          borderRadius: 20,
          paddingTop: DeviceHeight / 70.3333,
          marginVertical: DeviceHeight / 84.4,
          marginHorizontal: DeviceWidth / 78,
          position: 'absolute',
        },
        tabBarBackground: () => null,
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <HomeIcon
              color={color}
              width={DeviceWidth / 16.25}
              height={DeviceHeight / 35.1667}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Save"
        component={BookMarkScreen}
        options={{
          title: 'Save',
          tabBarIcon: ({ color }) => (
            <BookMarkIcon
              color={color}
              width={DeviceWidth / 16.25}
              height={DeviceHeight / 35.1667}
              tabs={true}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTab;
