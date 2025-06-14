import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import BottomTab from './BottomTab';
import NewsDetailScreen from '../screens/home/NewsDetailScreen';
import WebViewScreen from '../screens/home/WebViewScreen';

const Stack = createStackNavigator();
const Main = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="NewsDetails" component={NewsDetailScreen} />
      <Stack.Screen name="WebView" component={WebViewScreen} />
    </Stack.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({});
