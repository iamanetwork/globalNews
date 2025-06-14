import { Dimensions, Platform } from "react-native";

const DeviceWidth = Dimensions.get('screen').width;
const DeviceHeight = Dimensions.get('screen').height;
const ANDROID_API = Platform.OS === 'android' ? Number(Platform.Version) : 0;
export {DeviceWidth, DeviceHeight, ANDROID_API, }