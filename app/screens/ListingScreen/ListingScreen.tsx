import React, {useEffect, useMemo, useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import {Character} from '../../services/models';
import {fetchCharacters} from '../../services/api';
import ItemCard from './ItemCard';

export const ListingScreen = () => {
  const [characterList, setCharacterList] = React.useState<Character[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isBottomLoading, setIsBottomLoading] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      setIsLoading(true);
      const response = await fetchCharacters(1);
      if (response?.results?.length > 0) {
        setCharacterList(response?.results);
        setTotalPages(response?.info?.pages);
        setPage(2);
      }
    } catch (error) {
      console.log('ERROR', error);
    } finally {
      setIsLoading(false);
    }
  };

  const onEndReached = async () => {
    try {
      if (isBottomLoading || page === totalPages) return;
      setIsBottomLoading(true);
      console.log('End reached', page);
      const response = await fetchCharacters(page);
      if (response?.results?.length > 0) {
        setCharacterList(prev => [...prev, ...response?.results]);
        setPage(prev => prev + 1);
      }
    } catch (error) {
      console.log('ERROR IN END REACHED FUNC', error);
    } finally {
      setIsBottomLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/rickandmorty.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.title}>Listing Screen</Text>
        <FlatList
          data={characterList}
          renderItem={ItemCard}
          onEndReached={onEndReached}
          keyExtractor={item => item?.id?.toString()}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
