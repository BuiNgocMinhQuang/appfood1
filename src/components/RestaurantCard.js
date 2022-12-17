import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {urlFor} from '../../sanity';
import {useNavigation} from '@react-navigation/native';
import {useContext} from 'react';

import {Colors, Fonts, Images} from '../contants';
const RestaurantCard = ({
  id,
  imgUrl,
  title,
  ratting,
  genre,
  address,
  short_desc,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('RestaurantScreen', {
          id,
          imgUrl,
          title,
          ratting,
          genre,
          address,
          short_desc,
          dishes,
          long,
          lat,
        });
      }}
      style={styles.cardWrapper}>
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        style={styles.imageContainer}
      />
      <View style={styles.cardContainer}>
        <Text style={styles.resTitle}>{title}</Text>
        <View style={styles.deswrapper}>
          <AntDesign name="star" size={20} color="yellow" opacity={0.5} />
          <Text style={{fontSize: 13, color: Colors.DEFAULT_GREY}}>
            <Text style={{color: Colors.DEFAULT_GREEN}}>{ratting}</Text> .{' '}
            {genre}
          </Text>
        </View>

        <View style={styles.deswrapper}>
          <Entypo name="location-pin" size={22} color="red" opacity={0.5} />
          <Text style={{fontSize: 13, color: 'gray'}}>Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: 'white',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    marginVertical: 10,
    elevation: 8,
    elevation: 5,
    width: 280,
  },
  imageContainer: {
    height: 150,
    width: '100%',
    borderRadius: 5,
  },
  cardContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },

  resTitle: {
    fontSize: 20,
    paddingTop: 10,
    color: Colors.DEFAULT_BLACK,
  },
  deswrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
});
export default RestaurantCard;
