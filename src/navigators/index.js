// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {store} from '../../store';
import {Provider} from 'react-redux';
import {
  SplashScreen,
  SigninScreen,
  SignupScreen,
  WelcomeScreen,
  HomeScreen,
  RestaurantScreen,
  ChooseLocation,
  ProfileUserScreen,
  ManageProfileScreen,
  CartScreen,
  CategoryList,
  PreparingOrderScreen,
  DeliveryScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="SigninScreen" component={SigninScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
          <Stack.Screen name="ChooseLocation" component={ChooseLocation} />
          <Stack.Screen
            name="ProfileUserScreen"
            component={ProfileUserScreen}
          />
          <Stack.Screen
            name="ManageProfileScreen"
            component={ManageProfileScreen}
          />
          <Stack.Screen name="CartScreen" component={CartScreen} />
          <Stack.Screen name="CategoryList" component={CategoryList} />
          <Stack.Screen
            name="PreparingOrderScreen"
            component={PreparingOrderScreen}
          />
          <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default Navigators;
