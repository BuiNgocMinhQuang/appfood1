import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {urlFor} from '../../sanity';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from '../features/basketSlice';

import {Fonts, Colors, Images} from '../contants';
const DishRow = ({id, name, price, image, description}) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector(state => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket({id, name, price, image, description}));
  };
  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({id}));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        style={styles.wrapperDishRow}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, paddingRight: 10}}>
            <Text style={{fontSize: 18, marginBottom: 5, fontWeight: 'bold'}}>
              {name}
            </Text>
            <Text style={{color: Colors.DEFAULT_GREY}}>{description}</Text>
            <Text
              style={{
                marginTop: 8,
                color: Colors.DEFAULT_YELLOW,
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              $ {price}
            </Text>
          </View>

          <View style={styles.wrapperImage}>
            <Image
              resizeMode="contain"
              source={{uri: urlFor(image).url()}}
              style={styles.containerImage}
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View style={{paddingHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              width: '30%',
            }}>
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}>
              <AntDesign
                name="minuscircle"
                size={25}
                color={items.length > 0 ? '#00CCBB' : 'gray'}
              />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity>
              <AntDesign
                onPress={addItemToBasket}
                name="pluscircle"
                size={25}
                color="#00CCBB"
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  wrapperDishRow: {
    backgroundColor: Colors.DEFAULT_WHITE,
    borderWidth: 1,
    padding: 20,
    borderColor: Colors.DEFAULT_GREY,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  textCard: {
    color: Colors.DEFAULT_WHITE,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  wrapperImage: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#00CCBB',
    borderRadius: 10,
  },
  containerImage: {
    height: '100%',
    width: '100%',
  },
});
export default DishRow;
