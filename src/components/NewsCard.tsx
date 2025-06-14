import React from 'react';
import {
  TouchableOpacity,
  Text,
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  Image,
} from 'react-native';
import { itemProps } from '../redux/homeslice';

const { height: DeviceHeight, width: DeviceWidth } = Dimensions.get('window');

export interface NewsItemProps {
  item: {
    title: string;
    description: string;
    image: string;
  };
  onPress: () => void;
}

const NewsCard = ({
  item,
  onPress,
}: {
  item: itemProps;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      key={item.title}
      activeOpacity={0.7}
      style={styles.container}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Image
        source={{ uri: item.image }}
        style={styles.imageBackground}
        resizeMode="cover"
      />
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: DeviceHeight / 168.8,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    paddingVertical: DeviceHeight / 211,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  imageBackground: {
    width: '100%',
    height: DeviceHeight / 4.2,
    justifyContent: 'flex-end',
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: DeviceHeight / 42.2,
    fontWeight: '600',
    color: '#000',
    paddingHorizontal: DeviceWidth / 48.75,
  },
  description: {
    fontSize: DeviceHeight / 60.2857,
    fontWeight: '400',
    color: '#000',
    marginTop: DeviceHeight / 211,
    paddingHorizontal: DeviceWidth / 48.75,
  },
});
