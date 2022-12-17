// imports
import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const MapViewStyles = StyleSheet.create({
  mapView: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  searchContainer: {
    position: 'absolute',
    top: '50%',
    width: '90%',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
  },
  input: {
    borderColor: '#888',
    borderWidth: 1,
  },
});

export default MapViewStyles;
