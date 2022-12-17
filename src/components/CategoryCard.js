import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useContext} from 'react';

import {useNavigation} from '@react-navigation/native';
import {Fonts, Colors, Images} from '../contants';
const CategoryCard = ({imgUrl, title}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{marginRight: 25}}
      // onPress={() => {
      //   navigation.navigate('CategoryList');
      // }}>
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        style={styles.containerImage}
      />
      <Text style={styles.textCard}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  containerImage: {
    height: 60,
    width: 60,
    borderRadius: 5,
  },
  textCard: {
    color: Colors.DEFAULT_WHITE,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
export default CategoryCard;
