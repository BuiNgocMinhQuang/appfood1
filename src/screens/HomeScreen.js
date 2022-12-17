import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Categories from '../components/Categories';
import FeatureRow from '../components/FeatureRow';
import sanityClient from '../../sanity';
import {useContext} from 'react';
import {Colors, Fonts, Images} from '../contants';
import {Display} from '../utils';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured"] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->

        }
      }`,
      )
      .then(data => setFeaturedCategories(data))
      .catch(console.error);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundCuredContainer} />

      {/* Header */}

      <View style={styles.headerWrapper}>
        <View style={styles.headerContainer}>
          <View style={styles.headerTop}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ChooseLocation')}>
              <Entypo name="location-pin" size={30} color="white" />
            </TouchableOpacity>
            <View className="flex-1">
              <Text style={styles.titleTextWhite}>Delivery Now!</Text>
              <Text style={styles.textWhite}>Choose Your Locaiton</Text>
            </View>
          </View>
          {/* <TouchableOpacity>
            <Entypo
              name="user"
              size={30}
              color="white"
              onPress={() => navigation.navigate('ProfileUserScreen')}
            />
          </TouchableOpacity> */}
        </View>
      </View>

      {/* Search  */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchInput}>
          <Ionicons name="ios-search-outline" size={18} />
          <TextInput placeholder="Search something..." keyboardType="default" />
        </View>
      </View>

      <Categories style={{zIndex: 2}} />
      {/*Body*/}
      <ScrollView style={{zIndex: -2}}>
        {featuredCategories?.map(category => (
          <FeatureRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_desc}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SECONDARY_WHITE,
  },
  backgroundCuredContainer: {
    backgroundColor: Colors.DEFAULT_GREEN,
    height: 3000,
    position: 'absolute',
    top: -1 * (3000 - 250),
    width: 2000,
    borderRadius: 2000,
    alignSelf: 'center',
    zIndex: -1,
  },
  headerWrapper: {
    flexDirection: 'row',
    paddingBottom: 15,
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleTextWhite: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textWhite: {
    color: 'white',
    fontSize: 12,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingBottom: 10,
  },
  searchInput: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
    padding: 0,
    borderRadius: 10,
    alignItems: 'center',
  },
});
export default HomeScreen;
