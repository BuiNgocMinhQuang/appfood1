import * as React from 'react';
import MapView, {Callout, Circle, Marker} from 'react-native-maps';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../contants';
import {enableLatestRenderer} from 'react-native-maps';
import {SafeAreaProvider} from 'react-native-safe-area-context';

enableLatestRenderer();
const ChooseLocation = () => {
  const [pin, setPin] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, paddingTop: 50}}>
      <View style={styles.headerWrapper}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Entypo name="chevron-small-left" size={40} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.titleText}>My Address</Text>
      </View>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyCqhriWKQXx6WXSf-FKCkjf0jNOI7Hr7eg',
          language: 'en',
        }}
        styles={{
          container: {
            width: '90%',
            zIndex: 1,
            marginHorizontal: 20,
            padding: 20,
          },
          textInput: {
            backgroundColor: Colors.LIGHT_GREY2,
          },
          listView: {backgroundColor: 'white'},
        }}></GooglePlacesAutocomplete>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google">
        <Marker
          coordinate={pin}
          pinColor="#0A8791"
          draggable={true}
          onDragStart={e => {
            console.log('Drag start', e.nativeEvent.coordinate);
          }}
          onDragEnd={e => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}>
          <Callout>
            <Text>You're here !</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={1000} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  headerWrapper: {
    flexDirection: 'row',
    paddingBottom: 15,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    alignSelf: 'center',
    paddingLeft: 100,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default ChooseLocation;
// import {View, Text} from 'react-native';
// import React from 'react';
// import OrderTrackingScreen from '../components/MapViewComponent/orderTracking.screen';
// import {SafeAreaView} from 'react-native-safe-area-context';

// const ChooseLocation = () => {
//   return <OrderTrackingScreen />;
// };

// export default ChooseLocation;
