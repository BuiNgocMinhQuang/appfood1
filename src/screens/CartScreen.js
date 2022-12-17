import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from '../features/basketSlice';
import {selectRestaurant} from '../features/restaurantSlice';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';
import {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {urlFor} from '../../sanity';
import {useContext} from 'react';

const CartScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const [groupItemsInCart, setGroupedItemsCart] = useState([]);
  const restaurant = useSelector(selectRestaurant);
  const cartTotal = useSelector(selectBasketTotal);

  useEffect(() => {
    const groupItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsCart(groupItems);
  }, [items]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={styles.wrapperCart}>
          <View>
            <Text style={styles.titleCart}>Your Cart</Text>
            <Text style={styles.titleRestaurant}>{restaurant.title}</Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={styles.goBackButton}>
            <AntDesign name="closecircle" size={35} />
          </TouchableOpacity>
        </View>

        <View style={styles.wrapperImage}>
          <Image
            source={{
              uri: 'https://links.papareact.com/wru',
            }}
            style={styles.containerImage}
          />
          <Text style={{flex: 1, marginLeft: 10}}>Deliver in 50-60 min</Text>
          <TouchableOpacity>
            <Text style={{color: '#00CCBB'}}>Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.wrapperScrollView}>
          {Object.entries(groupItemsInCart).map(([key, items]) => (
            <View key={key} style={styles.containerScrollView}>
              <Text style={{color: '#00CCBB'}}>{items.length} x</Text>
              <Image
                source={{uri: urlFor(items[0]?.image).url()}}
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  marginLeft: 10,
                }}
              />
              <Text style={[{flex: 1, marginLeft: 10}]}>{items[0]?.name}</Text>

              <Text style={{marginRight: 10}}> {items[0]?.price} $</Text>

              <TouchableOpacity>
                <Text
                  style={{color: '#00CCBB', fontSize: 14}}
                  onPress={() => dispatch(removeFromBasket({id: key}))}>
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={[{padding: 20, marginTop: 20}]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'gray'}}>Subtotal</Text>
            <Text style={{color: 'gray'}}>{cartTotal} $</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'gray'}}>Delivery Fee</Text>
            <Text style={{color: 'gray'}}>2 $</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[{fontWeight: 'bold', fontSize: 24}]}>
              Order total
            </Text>
            <Text style={[{fontWeight: 'bold', fontSize: 24}]}>
              {cartTotal + 2} $
            </Text>
          </View>

          <TouchableOpacity
            style={{
              borderRadius: 10,
              backgroundColor: '#00CCBB',
              padding: 20,
            }}
            onPress={() => navigation.navigate('PreparingOrderScreen')}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapperCart: {
    paddingBottom: 10,

    shadowColor: '#000',
  },
  titleCart: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleRestaurant: {
    textAlign: 'center',
    color: 'gray',
  },
  goBackButton: {
    borderRadius: 15,
    position: 'absolute',
    top: 3,
    right: 5,
  },
  wrapperImage: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginVertical: 20,
  },
  containerImage: {
    height: 7,
    width: 7,
    backgroundColor: 'gray',
    padding: 16,
    borderRadius: 3,
  },
  wrapperScrollView: {
    borderTopWidth: 1,
    borderBottomWidth: 0,
    borderColor: 'gray',
  },
  containerScrollView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
export default CartScreen;
