import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import {Character} from '../../services/models';
import {} from '@react-navigation/native-stack';

interface ItemCardProps {
  item: Character;
  index: number;
  onCardClick: (item: Character) => void;
}

const ItemCard = ({item, index, onCardClick}: ItemCardProps) => {
  const statusColor = () => {
    if (item?.status === 'Alive') {
      return 'green';
    }
    if (item?.status === 'Dead') {
      return 'red';
    }
    return 'grey';
  };

  return (
    <Pressable
      onPress={() => {
        onCardClick(item);
      }}
      style={{
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 20,
        position: 'relative',
      }}>
      <View style={{flexDirection: 'row', gap: 10}}>
        <Image source={{uri: item?.image}} width={100} height={100} />
        <View>
          <Text style={{fontWeight: 'bold', color: 'black'}}>{item?.name}</Text>
          <Text style={{fontWeight: 'bold', color: 'black'}}>
            {item?.gender}
          </Text>
          <Text style={{fontWeight: 'bold', color: 'black'}}>
            {`Episodes - ${item?.episode?.length}`}
          </Text>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          right: 10,
          top: 10,
          height: 32,
          aspectRatio: 1,
          backgroundColor: statusColor(),
          borderRadius: 100,
        }}></View>
    </Pressable>
  );
};

export default ItemCard;

const styles = StyleSheet.create({});
