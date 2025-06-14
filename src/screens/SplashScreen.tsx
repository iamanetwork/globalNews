import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { DeviceHeight } from '../constants/CommonConstants';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.replace('BottomTab');
  }, []);

  return (
    <View style={styles.splashContainer}>
      <Text style={{ fontSize: DeviceHeight / 33.2667 }}>Global News</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
