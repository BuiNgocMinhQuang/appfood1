import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('DeliveryScreen');
    }, 5000);
  }, []);
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#8ca0c4',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animatable.Image
        source={require('../assets/Leisurely.gif')}
        animation="slideInUp"
        iterationCount={1}
        style={{height: 280, width: '100%'}}></Animatable.Image>
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        style={{
          fontSize: 20,
          marginVertical: 10,
          color: 'white',
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        Watting Restaurant to accpect your order !
      </Animatable.Text>
      <Progress.CircleSnail
        size={40}
        indeterminate={true}
        color={['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']}
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
