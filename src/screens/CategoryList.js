import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useContext} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';

const CategoryList = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[{flex: 1}]}>
      <View style="flex-1">
        <View style={[{alignItems: 'center'}]}>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={{
              position: 'absolute',
              top: 4,
              left: 5,
              borderRadius: 20,
              padding: 10,
            }}>
            <AntDesign name="arrowleft" size={20} />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                paddingTop: 10,
              }}>
              Your Cart
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoryList;
