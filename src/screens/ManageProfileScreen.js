import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';
import {Colors, Fonts, Images} from '../contants';

const ManageProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <View style={styles.headerWrapper}>
        <View style={styles.headerContainer}>
          <View style={styles.headerTop}>
            <TouchableOpacity onPress={navigation.goBack}>
              <Entypo name="chevron-small-left" size={40} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={{alignItems: 'center', position: 'relative'}}>
        <Image
          source={require('../assets/cuthong.jpeg')}
          style={styles.avataUser}
        />

        {/* <AntDesign
          name="camerao"
          size={24}
          color="black"
          style={styles.cameraIcon}
        /> */}
      </TouchableOpacity>
      <View style={styles.userSettingWrapper}>
        <View style={styles.containerSetting}>
          <View style={styles.featurePart}>
            <TouchableOpacity
              style={styles.settingPart}
              onPress={() => navigation.navigate('ManageProfile')}>
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
                <Feather name="lock" size={24} color={Colors.DEFAULT_GREEN} />
                <Text style={styles.textSetting}>Password</Text>
              </View>
              <Entypo
                name="chevron-small-right"
                size={30}
                color={Colors.INACTIVE_GREY}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingPart}>
              <View style={styles.iconSetting}>
                <Fontisto name="email" size={24} color={Colors.DEFAULT_GREEN} />
                <Text style={styles.textSetting}>Email</Text>
              </View>
              <Entypo
                name="chevron-small-right"
                size={30}
                color={Colors.INACTIVE_GREY}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingPart}>
              <View style={styles.iconSetting}>
                <Feather name="phone" size={24} color={Colors.DEFAULT_GREEN} />
                <Text style={styles.textSetting}>Phone</Text>
              </View>
              <Entypo
                name="chevron-small-right"
                size={30}
                color={Colors.INACTIVE_GREY}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingPart}>
              <View style={styles.iconSetting}>
                <FontAwesome
                  name="language"
                  size={24}
                  color={Colors.DEFAULT_GREEN}
                />
                <Text style={styles.textSetting}>English</Text>
              </View>
              <Entypo
                name="chevron-small-right"
                size={30}
                color={Colors.INACTIVE_GREY}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingPart}>
              <View style={styles.iconSetting}>
                <FontAwesome
                  name="intersex"
                  size={24}
                  color={Colors.DEFAULT_GREEN}
                />
                <Text style={styles.textSetting}>Male</Text>
              </View>
              <Entypo
                name="chevron-small-right"
                size={30}
                color={Colors.INACTIVE_GREY}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: Colors.DEFAULT_GREEN,
    flex: 1,
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
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
    marginRight: 20,
    zIndex: 1,
    position: 'relative',
  },
  wrapperCameraIcon: {},
  cameraIcon: {
    position: 'absolute',
    top: 10,
    right: 0,
    zIndex: 2,
    backgroundColor: Colors.DEFAULT_GREEN,
    width: 40,
    height: 40,
    borderRadius: 20,
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
export default ManageProfileScreen;
