// imports
import React from 'react';
import {View, Image, Text} from 'react-native';

// local imports
import DeliveryInfoStyles from './deliveryInfo.styles';

// constants

const DeliveryInfo = () => {
  return (
    <View style={DeliveryInfoStyles.deliveryInfoContainer}>
      <View style={DeliveryInfoStyles.deliveryInfoContainer_section1}>
        <View
          style={
            DeliveryInfoStyles.deliveryInfoContainer_section1_imageContainer
          }></View>
      </View>
      <View style={DeliveryInfoStyles.deliveryInfoContainer_section2}>
        <Text style={DeliveryInfoStyles.deliveryInfoContainer_section2_text1}>
          This is a Free Delivery
        </Text>
        <Text style={DeliveryInfoStyles.deliveryInfoContainer_section2_text2}>
          You saved an extra $4 on this order with Pro Plus. Great going! 😍
        </Text>
        <Text style={DeliveryInfoStyles.deliveryInfoContainer_section2_text3}>
          See how you've used Pro Plus
        </Text>
      </View>
    </View>
  );
};

export default DeliveryInfo;
