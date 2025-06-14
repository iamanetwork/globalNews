import {
  ActivityIndicator,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {
  ANDROID_API,
  DeviceHeight,
  DeviceWidth,
} from '../../constants/CommonConstants';
import WebView from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import BackIcon from '../../assets/svg/BackIcon';

const WebViewScreen = ({ route }) => {
  const { url } = route.params;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={styles.backIconContainer}
        activeOpacity={0.7}
        onPress={() => navigation.goBack()}
      >
        <BackIcon
          width={DeviceWidth / 13}
          height={DeviceHeight / 28.1333}
          color="black"
        />
      </TouchableOpacity>

      <WebView
        source={{ uri: url }}
        style={{ flex: 1 }}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />

      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#007BFF" />
        </View>
      )}
    </View>
  );
};

export default WebViewScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop:
      Platform.OS === 'ios'
        ? DeviceHeight > 700
          ? DeviceHeight / 16.88
          : DeviceHeight / 35.16
        : ANDROID_API <= 34
        ? 0
        : StatusBar.currentHeight,
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  backIconContainer: {
    width: DeviceWidth / 13,
    height: DeviceHeight / 28.1333,
    marginStart: DeviceHeight / 42.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
