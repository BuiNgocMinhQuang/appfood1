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
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Colors, Fonts, Images} from '../contants';
import {Display} from '../utils';
import firestore from '@react-native-firebase/firestore';
const ProfileUserScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  const [mode, setMode] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  firestore()
    .collection('Users')
    // .where('email', '==', email)
    .get()
    .then(querySnapshot => {
      console.log(
        querySnapshot.docs._data.email +
          ' okok' +
          querySnapshot.docs._data.password,
      );

      // if (querySnapshot.docs.length > 0) {
      //   if (
      //     querySnapshot.docs[0]._data.email === email &&
      //     querySnapshot.docs[0]._data.password === password
      //   ) {
      //     navigation.navigate('HomeScreen');
      //   } else {
      //     alert('email or pass not ok!');
      //   }
      //   console.log(
      //     querySnapshot.docs[0]._data.email +
      //       ' ' +
      //       querySnapshot.docs[0]._data.password,
      //   );
      // } else {
      //   console.log('account not found!');
      // }
    })
    .catch(error => {
      console.log(error);
    });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundCuredContainer} />

      <View style={styles.headerWrapper}>
        <View style={styles.headerContainer}>
          <View style={styles.headerTop}>
            <TouchableOpacity onPress={navigation.goBack}>
              <Entypo name="chevron-small-left" size={40} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.titleTextWhite}>Profile</Text>
          <TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome
                name="bell-o"
                size={24}
                color="white"
                style={styles.bellIcon}
              />
              <View style={styles.nofiNumber}>
                <Text style={styles.textNofi}>2</Text>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>

      {/*User */}
      <View style={styles.userContainer}>
        <Image
          source={require('../assets/cuthong.jpeg')}
          style={styles.avataUser}
        />
        <View>
          <Text style={styles.userName}>Thai Minh Thong</Text>
          <Text style={styles.userEmail}>thaiminhthong@gmail.com</Text>
        </View>
      </View>
      {/*Feature */}
      <View style={styles.userFeatureWrapper}>
        <View style={styles.containerFeature}>
          <TouchableOpacity style={styles.userFeature}>
            <View>
              <View style={styles.bgIcon1}></View>
              <Ionicons
                name="ios-fast-food-outline"
                size={25}
                color={Colors.DEFAULT_GREEN}
                style={styles.icon}
              />
            </View>
            <Text style={styles.textFeature}>My All Order</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userFeature}>
            <View>
              <View style={styles.bgIcon2}></View>
              <AntDesign
                name="gift"
                size={25}
                color={Colors.DEFAULT_ORANGE}
                style={styles.icon}
              />
            </View>

            <Text style={styles.textFeature}>Offer & Promos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userFeature}>
            <View>
              <View style={styles.bgIcon3}></View>

              <Ionicons
                name="location-outline"
                size={28}
                color={Colors.DEFAULT_YELLOW}
                style={styles.icon}
              />
            </View>

            <Text style={styles.textFeature}>Delivery Addreess</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/*Settings */}
      <View style={styles.userSettingWrapper}>
        <View style={styles.containerSetting}>
          <View style={styles.featurePart}>
            <Text style={styles.titleSetting}>My account</Text>
            <TouchableOpacity
              style={styles.settingPart}
              onPress={() => navigation.navigate('ManageProfileScreen')}>
              <View style={styles.iconSetting}>
                <AntDesign name="user" size={24} color={Colors.DEFAULT_GREEN} />
                <Text style={styles.textSetting}>Manage profile</Text>
              </View>
              <Entypo
                name="chevron-small-right"
                size={30}
                color={Colors.INACTIVE_GREY}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingPart}>
              <View style={styles.iconSetting}>
                <Ionicons
                  name="wallet-outline"
                  size={24}
                  color={Colors.DEFAULT_GREEN}
                />
                <Text style={styles.textSetting}>Payment</Text>
              </View>
              <Entypo
                name="chevron-small-right"
                size={30}
                color={Colors.INACTIVE_GREY}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.featurePart}>
            <Text style={styles.titleSetting}>Notificition</Text>
            <TouchableOpacity style={styles.settingPart}>
              <View style={styles.iconSetting}>
                <FontAwesome
                  name="bell-o"
                  size={24}
                  color={Colors.DEFAULT_GREEN}
                />
                <Text style={styles.textSetting}>Notificition</Text>
              </View>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={!isEnabled}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingPart}>
              <View style={styles.iconSetting}>
                <FontAwesome
                  name="bell-o"
                  size={24}
                  color={Colors.DEFAULT_GREEN}
                />
                <Text style={styles.textSetting}>Promathinal Notificition</Text>
              </View>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.featurePart}>
            <Text style={styles.titleSetting}>More</Text>
            <TouchableOpacity style={styles.settingPart}>
              <View style={styles.iconSetting}>
                <MaterialCommunityIcons
                  name="theme-light-dark"
                  size={24}
                  color={Colors.DEFAULT_GREEN}
                />

                <Text style={styles.textSetting}>Theme mode</Text>
              </View>
              <Entypo
                name="chevron-small-right"
                size={30}
                color={Colors.INACTIVE_GREY}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingPart}>
              <View style={styles.iconSetting}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color={Colors.DEFAULT_GREEN}
                />

                <Text style={styles.textSetting}>Log out</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    top: -1 * (3000 - 280),
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
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleTextWhite: {
    color: Colors.DEFAULT_WHITE,
    fontWeight: 'bold',
    fontSize: 20,
  },
  userName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  userEmail: {
    color: 'white',
    fontSize: 12,
  },
  userContainer: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingVertical: 20,
    alignItems: 'center',
  },
  bellIcon: {
    position: 'relative',
  },
  nofiNumber: {
    position: 'absolute',
    backgroundColor: Colors.DEFAULT_YELLOW,
    borderRadius: 7.5,
    width: 15,
    height: 15,
    alignItems: 'center',
    right: -2,
    top: -2,
  },
  textNofi: {
    color: Colors.DEFAULT_RED,
    fontSize: 12,
  },
  avataUser: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'white',
    marginRight: 20,
  },
  userFeatureWrapper: {
    backgroundColor: Colors.DEFAULT_WHITE,
    marginHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textFeature: {
    textAlign: 'center',
  },
  containerFeature: {
    marginHorizontal: 20,
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  containerSetting: {
    marginHorizontal: 20,
  },
  userFeature: {
    alignItems: 'center',
    maxWidth: 80,
    paddingVertical: 15,
  },
  bgIcon1: {
    position: 'relative',
    backgroundColor: Colors.LIGHT_GREEN,
    borderRadius: 20,
    width: 40,
    height: 40,
  },
  bgIcon2: {
    position: 'relative',
    backgroundColor: Colors.LIGHT_ORANGE,
    borderRadius: 20,
    width: 40,
    height: 40,
  },
  bgIcon3: {
    position: 'relative',
    backgroundColor: Colors.LIGHT_YELLOW,
    borderRadius: 20,
    width: 40,
    height: 40,
  },
  icon: {
    position: 'absolute',
    top: 5,
    left: 7,
  },
  userSettingWrapper: {
    backgroundColor: Colors.DEFAULT_WHITE,
    marginHorizontal: 20,
    paddingVertical: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'column',
  },
  titleSetting: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.DEFAULT_BLACK,
  },
  featurePart: {
    paddingVertical: 10,

    width: '100%',
  },
  settingPart: {
    flexDirection: 'row',

    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textSetting: {
    color: Colors.INACTIVE_GREY,
    marginLeft: 10,
  },
  iconSetting: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default ProfileUserScreen;
