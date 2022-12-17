import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectBasketItems, selectBasketTotal} from '../features/basketSlice';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../contants';

const CartIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;
  return (
    <View style={styles.wrapperCartIcon}>
      <TouchableOpacity
        onPress={() => navigation.navigate('CartScreen')}
        style={styles.containerCartIcon}>
        <Text style={styles.textCartIcon}>{items.length}</Text>
        <Text style={styles.titleCartIcon}>CartIcon</Text>
        <Text style={styles.textTotal}>
          <Text>{basketTotal}$</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperCartIcon: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    zIndex: 50,
  },
  containerCartIcon: {
    marginHorizontal: 20,
    backgroundColor: Colors.DEFAULT_GREEN,
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textCartIcon: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: Colors.LIGHT_GREEN,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  titleCartIcon: {
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  textTotal: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default CartIcon;
