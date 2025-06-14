import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BookMarkIcon from '../../assets/svg/BookMarkIcon';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { toggleBookmark } from '../../redux/homeslice';
import {
  ANDROID_API,
  DeviceHeight,
  DeviceWidth,
} from '../../constants/CommonConstants';
import { useNavigation } from '@react-navigation/native';
import BackIcon from '../../assets/svg/BackIcon';

const NewsDetailScreen = ({ route }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const { item } = route?.params;
  const navigation = useNavigation();
  const savedData = useSelector((state: RootState) => state.home.savedData);

  const isBookmarked = savedData?.some(
    (saved: any) => saved.title === item.title,
  );

  const onBookmarkPress = () => {
    dispatch(toggleBookmark(item));
  };

  const cleanContent = (content: string) => {
    if (!content) return '';
    return content
      .replace(/\[\+\d+.*?\]/, '')
      .replace(/\[\d+.*?\]/, '')
      .trim();
  };

  const isTruncated = (content: string) => {
    if (!content) return false;
    return (
      content.includes('[+') ||
      content.match(/\[\+\d+.*?\]/) !== null ||
      content.match(/\[\d+.*?\]/) !== null ||
      content.trim().endsWith('...') ||
      content.trim().endsWith('…')
    );
  };

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

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{item.title}</Text>
          <TouchableOpacity onPress={onBookmarkPress} activeOpacity={0.7}>
            <BookMarkIcon
              width={DeviceWidth / 16.25}
              height={DeviceHeight / 35.1667}
              color={isBookmarked ? 'tomato' : 'gray'}
            />
          </TouchableOpacity>
        </View>

        {item.image ? (
          <Image source={{ uri: item.image }} style={styles.image} />
        ) : null}

        <Text style={styles.description}>{item.description}</Text>

        <Text style={styles.content}>{cleanContent(item.content)}</Text>

        {isTruncated(item.content) && (
          <TouchableOpacity
            onPress={() => navigation.navigate('WebView', { url: item.url })}
          >
            <Text style={styles.viewMoreText}>Read full article</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
};

export default NewsDetailScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop:
      Platform.OS === 'ios'
        ? DeviceHeight > 700
          ? DeviceHeight / 16.88
          : DeviceHeight / 35.16
        : ANDROID_API <= 34
        ? 0
        : StatusBar.currentHeight,
  },
  backIconContainer: {
    width: DeviceWidth / 13,
    height: DeviceHeight / 28.1333,
    marginStart: DeviceHeight / 42.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: DeviceHeight / 52.75,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: DeviceHeight / 70.33,
  },
  title: {
    flex: 1,
    fontSize: DeviceHeight / 42.2,
    fontWeight: 'bold',
    marginRight: DeviceWidth / 48.75,
  },
  image: {
    width: '100%',
    height: DeviceHeight / 4.2,
    borderRadius: 8,
    marginBottom: DeviceHeight / 70.33,
  },
  description: {
    fontSize: DeviceHeight / 52.75,
    color: '#555',
    marginBottom: DeviceHeight / 105.5,
  },
  content: {
    fontSize: DeviceHeight / 46.8888,
    color: '#333',
  },
  viewMoreText: {
    color: '#007BFF',
    fontSize: DeviceHeight / 60.2857,
    marginTop: DeviceHeight / 211,
  },
});
