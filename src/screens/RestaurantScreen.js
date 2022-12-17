import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {urlFor} from '../../sanity';
import {Colors, Fonts, Images} from '../contants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import DishRow from '../components/DishRow';
import CartIcon from '../components/CartIcon';
import {useDispatch} from 'react-redux';
import {setRestaurant} from '../features/restaurantSlice';
import {useContext} from 'react';

const RestaurantScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {
    params: {
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
    },
  } = useRoute();

  useLayoutEffect(() => {
    dispatch(
      setRestaurant({
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
      }),
    );
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <CartIcon />

      <ScrollView
        style={{
          position: 'relative',
        }}>
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          style={{
            height: 350,
            width: '100%',
            padding: 20,
          }}
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          style={styles.goBackButton}>
          <Entypo name="chevron-small-left" size={40} color="white" />
        </TouchableOpacity>
      </ScrollView>

      <ScrollView>
        <View style={styles.wrapperScrollView}>
          <Text style={styles.titleRes}>{title}</Text>
          <View style={styles.wrapperDes}>
            <View style={styles.wrapperIcon}>
              <AntDesign name="star" size={20} color="yellow" opacity={0.5} />
              <Text style={styles.textDes}>
                <Text style={styles.textDes}>{ratting}</Text> . {genre}
              </Text>
            </View>
          </View>
          <View style={styles.wrapperIcon}>
            <Entypo name="location-pin" size={22} color="red" opacity={0.5} />
            <Text style={styles.textDes}>{address}</Text>
          </View>
          <Text style={styles.textLongDes}>{short_desc}</Text>
        </View>

        <View>
          <Text
            style={[
              {
                paddingHorizontal: 20,
                paddingTop: 10,
                marginBottom: 5,
                fontSize: 40,
              },
            ]}>
            Let pick one 🍴
          </Text>
          {/*Dishrows*/}
          {dishes.map(dish => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_desc}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  goBackButton: {
    position: 'absolute',
    top: 60,
    left: 5,
    borderRadius: 20,
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  wrapperScrollView: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  titleRes: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.DEFAULT_WHITE,
  },
  wrapperDes: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  wrapperIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  textDes: {
    fontSize: 12,
    color: Colors.DEFAULT_WHITE,
  },
  textLongDes: {
    color: Colors.DEFAULT_WHITE,
    marginTop: 10,
    paddingBottom: 20,
  },
});
export default RestaurantScreen;
