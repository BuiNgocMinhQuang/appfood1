import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import {selectRestaurant} from '../features/restaurantSlice';
import {useSelector} from 'react-redux';
import MapViewComponent from '../components/MapViewComponent/components/MapView/mapView.component';
import MapView, {Marker} from 'react-native-maps';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View style={{backgroundColor: '#0A8791', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          backgroundColor: 'transparent',
        }}>
        <TouchableOpacity
          style={{padding: 20}}
          onPress={() => navigation.navigate('HomeScreen')}>
          <AntDesign name="closecircle" size={35} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '200',
            color: 'white',
            padding: 20,
          }}>
          Order Help
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          height: 80,
          marginHorizontal: 10,
          zIndex: 50,
        }}>
        <Image
          source={require('../assets/Harry.jpg')}
          style={{
            height: 12,
            width: 12,
            backgroundColor: 'grey',
            padding: 20,
            borderRadius: 20,
            marginLeft: 20,
          }}
        />
        <View style={{flex: 1, borderRadius: 10, marginLeft: 5}}>
          <Text style={{fontSize: 18}}>Harry Medison</Text>
          <Text style={{color: 'grey'}}>Your Shipper</Text>
        </View>
        <Text
          style={{
            color: '#00CCBB',
            fontSize: 20,
            marginRight: 10,
            fontWeight: 'bold',
          }}>
          Call
        </Text>
      </View>
      <MapViewComponent style={{flex: 1, marginTop: -10, zIndex: 0}} />
    </View>
  );
};

export default DeliveryScreen;
