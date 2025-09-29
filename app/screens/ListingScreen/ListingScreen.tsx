import React from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';

export const ListingScreen = () => {
  return (
    <ImageBackground
      source={require('../../../assets/images/rickandmorty.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.title}>Listing Screen</Text>
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
