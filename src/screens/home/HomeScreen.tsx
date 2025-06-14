import {
  ActivityIndicator,
  FlatList,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { fetchHomeData, itemProps } from '../../redux/homeslice';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  ANDROID_API,
  DeviceHeight,
  DeviceWidth,
} from '../../constants/CommonConstants';
import { useNavigation } from '@react-navigation/native';
import NewsCard from '../../components/NewsCard';

const HomeScreen = () => {
  const { homeData } = useSelector((state: RootState) => state.home);
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchGlobalNews();
  }, []);

  const fetchGlobalNews = async () => {
    try {
      setLoading(true);
      setError(null);
      await dispatch(fetchHomeData());
    } catch (err: any) {
      setError('Failed to fetch news. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderNewsData = ({
    item,
  }: {
    item: {
      content: string;
      description: string;
      image: string;
      publishedAt: string;
      source: {
        name: string;
        url: string;
      };
      title: string;
      url: string;
    };
  }) => {
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

  const renderIndicator = () => {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator size={'large'} color={'black'} />
      </View>
    );
  };

  const renderEmptyComponent = () => (
    <View style={styles.centered}>
      <Text style={styles.messageText}>{error ? error : 'No data found.'}</Text>
      <TouchableOpacity style={styles.retryButton} onPress={fetchGlobalNews}>
        <Text style={styles.retryText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.main}>
      <View style={styles.listContainer}>
        {loading && renderIndicator()}

        <FlatList
          data={homeData}
          keyExtractor={item => item.title}
          renderItem={renderNewsData}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={!loading ? renderEmptyComponent : null}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

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
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: DeviceHeight / 42.2,
  },
  messageText: {
    fontSize: DeviceHeight / 52.75,
    color: '#555',
    textAlign: 'center',
  },
  retryButton: {
    marginTop: DeviceHeight / 84.4,
    backgroundColor: '#007BFF',
    paddingHorizontal: DeviceWidth / 19.5,
    paddingVertical: DeviceHeight / 105.5,
    borderRadius: 6,
  },
  listContainer: {
    flex: 1,
    paddingBottom: DeviceHeight / 10.55,
  },
  retryText: {
    color: '#fff',
    fontSize: DeviceHeight / 60.2857,
  },
  indicator: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
