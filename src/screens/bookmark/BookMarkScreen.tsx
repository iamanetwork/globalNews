import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { ANDROID_API, DeviceHeight } from '../../constants/CommonConstants';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useNavigation } from '@react-navigation/native';
import NewsCard from '../../components/NewsCard';
import { itemProps } from '../../redux/homeslice';
const BookMarkScreen = () => {
  const savedData = useSelector((state: RootState) => state.home.savedData);
  const navigation = useNavigation();
  interface NewsItem {
    item: {
      title: string;
      description: string;
      content: string;
      image: string;
      publishedAt: string;
      url: string;
      source: {
        name: string;
        url: string;
      };
    };
  }

  const renderNewsData = ({ item }: NewsItem) => {
    return (
      <NewsCard
        item={item}
        onPress={() => {
          navigation.navigate('NewsDetails', {
            item,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.main}>
      {savedData.length === 0 ? (
        <Text style={styles.emptyText}>No bookmarks yet!</Text>
      ) : (
        <View style={styles.listContainer}>
          <FlatList
            data={savedData}
            keyExtractor={item => item.url}
            renderItem={renderNewsData}
          />
        </View>
      )}
    </View>
  );
};

export default BookMarkScreen;

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
  emptyText: {
    marginTop: DeviceHeight / 42.2,
    textAlign: 'center',
    fontSize: DeviceHeight / 52.75,
    color: 'gray',
  },
  itemContainer: {
    padding: DeviceHeight / 84.4,
    marginBottom: DeviceHeight / 105.5,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontWeight: 'bold',
    fontSize: DeviceHeight / 52.75,
    marginBottom: DeviceHeight / 211,
  },
  desc: {
    fontSize: DeviceHeight / 60.2857,
    color: '#555',
  },
  listContainer: {
    flex: 1,
    paddingBottom: DeviceHeight / 10.55,
  },
});
