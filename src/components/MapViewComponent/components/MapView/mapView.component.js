// imports
import React from 'react';
import {Platform, View} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  PROVIDER_DEFAULT,
  Marker,
} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import {selectRestaurant} from '../../../../features/restaurantSlice';
import {useSelector} from 'react-redux';
// local imports
import MapViewStyles from './mapView.styles';

const MapViewComponent = () => {
  const defaultProvider =
    Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE;

  const restaurant = useSelector(selectRestaurant);

  return (
    <View>
      <MapView
        provider={defaultProvider}
        style={MapViewStyles.map}
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_desc}
          identifier="origin"
          pinColor="red"
        />
      </MapView>
      {/* <View style={MapViewStyles.searchContainer}>
        <GooglePlacesAutocomplete
          styles={{textInput: MapViewStyles.input}}
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyAK3EJNehn3kCu9kQRIAKvlx2RB-PDKy3M',
            language: 'en',
          }}
        />
      </View> */}
    </View>
  );
};

export default MapViewComponent;
