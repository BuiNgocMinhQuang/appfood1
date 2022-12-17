import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RestaurantCard from './RestaurantCard';
import sanityClient from '../../sanity';
import {useContext} from 'react';

import {Fonts, Colors, Images} from '../contants';
const FeatureRow = ({id, title, description}) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured" && _id == $id] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{
            name
          }
        },
      }[0]
      `,
        {id},
      )
      .then(data => {
        setRestaurants(data?.restaurants);
      })
      .catch(console.error);
  }, [id]);

  return (
    <View>
      <View style={styles.wrapperFeatureRow}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{title}</Text>
      </View>

      <Text style={styles.textDes}>{description}</Text>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{paddingTop: 20}}>
        {/*Restaurant Card*/}

        {restaurants?.map(restaurant => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            ratting={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_desc={restaurant.short_desc}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperFeatureRow: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  textDes: {
    fontSize: 14,
    color: Colors.DEFAULT_GREY,
    paddingHorizontal: 20,
  },
  containerImage: {
    height: 20,
    width: 20,
    padding: 20,
  },
});
export default FeatureRow;
